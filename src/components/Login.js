import React, {useState} from 'react';


export const LoginForm = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        alert(`Login: ${login}, passwod: ${password}`)
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <header>
                    <img width='60' src="" alt="log in"/>

                </header>
                <label htmlFor="login">
                    <input
                        onChange={(e) => setLogin(e.target.value)}
                        value={login}
                        id={login}
                        name={login}
                        type="text"/>
                </label>
                <label htmlFor="password">Password</label>
                <input
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    id={password}
                    name={password}
                    type="text"/>
                <button type='submit'>Log in</button>
            </form>


        </div>
    )
}
