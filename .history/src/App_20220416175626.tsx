import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist'
import style from './App.module.scss';
import Routing from './Routing';


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
