import { Component } from 'react';

class ScrollBox extends Component {
  // 순서2
  // 맨밑으로 이동하는 함수.
  scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.box;
    this.box.scrollTop = scrollHeight - clientHeight;
  };

  render() {
    return (
      <div
        style={{
          border: '1px solid black',
          height: '300px',
          width: '300px',
          overflow: 'auto',
        }}
        // 순서1
        ref={(ref) => {
          this.box = ref;
        }}
      >
        <div
          style={{
            height: '650px',
            background: 'linear-gradient(white, black)',
          }}
        />
      </div>
    );
  }
}

export default ScrollBox;
