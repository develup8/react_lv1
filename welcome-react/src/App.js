import React, { Fragment } from 'react';

function App() {
  const name = 'react';
  return <div>{name === 'react' && <h1>hello react</h1>}</div>;
}

export default App;
