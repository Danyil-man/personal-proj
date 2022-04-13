import React from 'react';
import style from './App.module.scss';
import Routing from './routing';
const App = () => {

  return (
    <div className={style.wrapper}>
      <Routing />
    </div>
  );
}

export default App;
