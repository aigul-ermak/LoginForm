import React from 'react';
import logIn from '../assets/img/log-in.png'

import {useFormik} from 'formik';
import * as Yup from 'yup'


export const LoginForm = () => {
    // const [login, setLogin] = useState('');
    // const [password, setPassword] = useState('');
    const {handleSubmit, handleChange, values, touched, errors, handleBlur } = useFormik({
        initialValues: {
            login: '',
            password: ''
        },
        validationSchema: Yup.object({
            login: Yup.string().max(10, 'Login must be shorter than 10 characters').required('Required'),
            password: Yup.string().max(6, 'Password must be shorter than 6 characters').required('Required')

        }),
        onSubmit: ({login, password}) => {
            alert(`Login: ${login}, password: ${password}`)
        }
    })

    const onSubmit = (e) => {
        e.preventDefault();
        // alert(`Login: ${login}, passwod: ${password}`)
    }

    return (
        <div >
            <form onSubmit={handleSubmit} >
                <header>
                    <img width='60' src={logIn} alt="log in"/>
                </header>
                <label htmlFor="login">
                    <input
                        onChange={handleChange}
                        value={values.login}
                        id="login"
                        name="login"
                        onBlur={handleBlur}
                        type="text"/>
                    {touched.login && errors.login ? (
                        <div>{errors.login}</div> ) : null}
                </label>
                <label htmlFor="password">Password</label>
                <input
                    onChange={handleChange}
                    value={values.password}
                    id="password"
                    name="password"
                    onBlur={handleBlur}
                    type="text"/>
                {touched.password && errors.password ? (
                    <div>{errors.password}</div> ) : null}
                <button type='submit'>Log in</button>
            </form>
        </div>
    )
}
