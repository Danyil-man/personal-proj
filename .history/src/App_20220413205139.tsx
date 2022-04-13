import React from 'react';
import style from './App.module.scss';
import Routing from './routing';
const App = () => {

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <Routing />
      </div>
    </div>
  );
}

export default App;
