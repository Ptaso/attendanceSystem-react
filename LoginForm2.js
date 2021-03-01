import React, { useState } from 'react';
import Countries from './Countries';


function LoginForm2({Login, error}) {
    const [details, setDetails] = useState({name: "", password: "", country: ""});

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }
    

    return (
        <form className="loginForm" onSubmit={submitHandler}>

            {(error !== "") ? (<div className="error">{error}</div>) : ""}
            
            <input
            className="input"
            type='text'
            placeholder='Jmeno zamestnance'
            onChange={(e) => setDetails({...details, name: e.target.value})}
            value={details.name}
            />

            <input
            className="input"
            type='password'
            placeholder='Heslo'
            onChange={(e) => setDetails({...details, password: e.target.value})}
            value={details.password}
            />

            <Countries
            type='country'
            onChange= {(e) => setDetails({...details, country: e.target.value})}
            value={details.country}
            />

            <input className="btn" type="submit" value="Prihlaseni"/>
            
        </form>
    );
}

export default LoginForm2;