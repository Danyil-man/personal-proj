import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { HOME_ROUTE, LOGIN_ROUTE, SIGNUP_ROUTE } from '../../routings/pathVariables';
import { Field, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import { logIn, signUp } from '../../store/redux/reducers/userReducer';
import { useDispatch, useSelector } from 'react-redux';
import style from './Auth.module.scss'

const Auth = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const LogIn = location.pathname === LOGIN_ROUTE


    const auth = (values: any) => {
        if (LogIn) {
            dispatch(logIn(values.email, values.password))
            navigate(HOME_ROUTE)
        } else {
            dispatch(signUp(values.email, values.password))
            navigate(HOME_ROUTE)
        }
    }
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <Formik initialValues={{
                    email: '',
                    password: ''
                }}
                    onSubmit={auth} >
                    <Form>
                        <div className={style.form}>
                            <h1 className={style.mainText}>{LogIn ? 'Log In' : 'Sign Up'}</h1>
                            <div className={style.formItem} >
                                <label className={style.label} >Email</label>
                                <div >
                                    <Field className={style.inputItem} name="email" type="email" placeholder="example@mail.com" required />
                                </div>
                            </div>
                            <div className={style.formItem}>
                                <label className={style.label}>Password</label>
                                <div >
                                    <Field className={style.inputItem} name="password" placeholder="Your password" type="password" required />
                                </div>
                            </div>
                            <div className={style.formFooter} >
                                <button className={style.submitBtn} type="submit">
                                    {LogIn ? 'Log In' : 'Sign Up'}
                                </button>
                                <div className={style.formFooterNavigation} >
                                    {LogIn ? <div className={style.formNavigation}>
                                        <p className={style.questionTag}>Немає акаунта?</p>
                                        <Link className={style.link} to={SIGNUP_ROUTE}>Зареєструватися</Link>
                                    </div> : <div className={style.formNavigation}>
                                        <p className={style.questionTag}>Вже маєте акаунт? </p>
                                        <Link className={style.link} to={LOGIN_ROUTE}>Увійти</Link>
                                    </div>}
                                </div>
                            </div>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default Auth