import React, { Fragment } from 'react';

function App() {
  const name = 'react';
  return (
    <>
      {name === 'react' ? (<h1>hello react</h1>) : (<h1>not react</h1>)}
    </>
  );
}

export default App;
