import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './App.module.scss';
import Routing from './Routing';
import { useSelector } from 'react-redux';
import { AppStateType } from './store/redux/store';
import { checkAuth } from './store/redux/reducers/userReducer';
import { Spinner } from 'react-bootstrap';


const App = () => {
  const user = useSelector((state: AppStateType) => state.user)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    checkAuth().then(data => {
      user.isAuth = true
    }).finally(() => setLoading(false))
  }, [])
  if (loading) {
    return <Spinner animation='grow' />
  }
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <Routing />
      </div>
    </div>
  );
}

export default App;
