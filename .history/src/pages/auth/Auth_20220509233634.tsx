import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { HOME_ROUTE, LOGIN_ROUTE, SIGNUP_ROUTE } from '../../routings/pathVariables';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup'
import { Link } from 'react-router-dom';
import { logIn, signUp } from '../../store/redux/reducers/userReducer';
import { useDispatch, useSelector } from 'react-redux';
import style from './Auth.module.scss'
import { EyeFill, EyeSlashFill } from 'react-bootstrap-icons';
import { AppStateType } from '../../store/redux/store';
import PageLoader from '../../components/common/PageLoader/PageLoader';
import { email, haveAcc, haveNotAcc, logInLink, logInText, password, registerLink, signUpText } from '../../consts/auth';
import { authEmailLong, authEmailShort, authPasswordLong, authPasswordShort } from '../../consts/yupValidationText';


const AuthSchema = Yup.object().shape({
    email: Yup.string()
        .min(10, authEmailShort)
        .max(50, authEmailLong),
    password: Yup.string()
        .min(4, authPasswordShort)
        .max(20, authPasswordLong),
})
const Auth = () => {
    const [showPassword, setShowPassword] = useState(false)
    const { isLoading } = useSelector((state: AppStateType) => state.user)
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

        <div className={style.content}>
            {isLoading ? <PageLoader /> : null}
            <Formik initialValues={{
                email: '',
                password: ''
            }}
                validationSchema={AuthSchema}
                onSubmit={auth} >
                {({ errors }) => (<Form>
                    <div className={style.form}>
                        <h1 className={style.mainText}>{LogIn ? logInText : signUpText}</h1>
                        <div className={style.formItem} >
                            <label className={style.label} >{email}</label>
                            <div className={style.inputField}>
                                <Field className={style.inputItem} name="email" type="email" placeholder="example@mail.com" required />
                                <p className={style.error}>{errors.email}</p>
                            </div>
                        </div>
                        <div className={style.formItem}>
                            <label className={style.label}>{password}</label>
                            <div className={style.inputField}>
                                <Field className={style.inputItem} name="password" placeholder="Your password" type={`${showPassword ? 'text' : 'password'}`} required />
                                <p className={style.error}>{errors.password}</p>
                                <div className={style.hidePassword}>
                                    {showPassword ? <EyeFill size={18} onClick={() => setShowPassword(!showPassword)} /> : <EyeSlashFill size={18} onClick={() => setShowPassword(!showPassword)} />}
                                </div>
                            </div>
                        </div>
                        <div className={style.formFooter} >
                            <button className={style.submitBtn} type="submit">
                                {LogIn ? logInText : signUpText}
                            </button>
                            <div className={style.formFooterNavigation} >
                                {LogIn ? <div className={style.formNavigation}>
                                    <p className={style.questionTag}>{haveNotAcc}</p>
                                    <Link className={style.link} to={SIGNUP_ROUTE}>{registerLink}</Link>
                                </div> : <div className={style.formNavigation}>
                                    <p className={style.questionTag}>{haveAcc}</p>
                                    <Link className={style.link} to={LOGIN_ROUTE}>{logInLink}</Link>
                                </div>}
                            </div>
                        </div>
                    </div>
                </Form>)}
            </Formik>

        </div>
    )
}

export default Auth