import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './App.module.scss';
import Routing from './Routing';
import { useSelector } from 'react-redux';
import { AppStateType } from './store/redux/store';
import { checkAuth } from './store/redux/reducers/userReducer';
import PageLoader from './components/common/PageLoader/PageLoader';


const App = () => {
  const user = useSelector((state: AppStateType) => state.user)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      checkAuth().then(data => {
        user.isAuth = true
        console.log(data)
      }).finally(() => setLoading(false))
    }, 1000)

  }, [])
  if (loading) {
    return <PageLoader />
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
