import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Profile()
{
  return (
    <div>
      <img src="src/cao-obeso3.png" alt="Salsiha Obeso"/>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>HELLO React</h1>
    <Profile />
  </React.StrictMode>
);
