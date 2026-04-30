import { useState } from "react";

function useLocalStorage(key, initailValue) {
    // 값 가져오기
    const [storedValue, setStoredValue] = useState(
        () => {
            // 로컬스토리지에서 값을 불러오기. 파일 입력, 출력, 예외 발생 가능성이 있다. 
            // 그래서, 예외 처리. 
            try {
                const item = localStorage.getItem(key);
                return item ? JSON.parse(item) : initailValue;
            } catch{
                return initailValue;
            }
        }
    );

    // 값 설정하기 
    const setValue = (value) => {
        try {
            setStoredValue(value);
            localStorage.setItem(key, JSON.stringify(value));
        } catch(error){
            console.error(error);
        }    
    }

    return [storedValue, setValue]
}

export default useLocalStorage;