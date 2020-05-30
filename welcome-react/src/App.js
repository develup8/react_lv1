import React from 'react';

function App() {
  const name = 'react';
  const style = {
    backgroundColor : 'black',
    color : 'aqua',
    fontSize : '48px',
    fotWeight : 'bold',
    padding: 16 // 단위 생략시 자동으로 px 지정
  }
  return <div style={style}>{name}</div>
}

export default App;
