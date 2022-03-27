import React from 'react';
import logIn from '../assets/img/log-in.png'
import '../style/LoginForm.css'

import { useForm } from "react-hook-form";
import * as Yup from 'yup'


export const LoginFormReactHookForm = () => {
const {register, handleSubmit, formState: {errors}} = useForm();
const onSubmit = data => console.log(data);


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <header>
                    <img width='50' src={logIn} alt="log in"/>
                </header>
                <label htmlFor="login">Login</label>
                <input
                    {...register('login', {required: true})}
                />
                {errors.login?.type === 'required' && <div>Login is required</div>}
                {/*{errors.login && (<div>{errors.login.message}</div>)}*/}

                <label htmlFor="password">Password</label>
                <input
                    {...register('password', {required: true})}
                />
                {errors.password?.type === 'required' && <div>Password is required</div>}
                <button type='submit'>Log in</button>
            </form>
        </div>
    )
}
