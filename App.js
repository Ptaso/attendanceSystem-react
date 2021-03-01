import React, { useState } from 'react';
import Time from './components/Time';
import LoginForm2 from './components/LoginForm2';
import './App.css';


function App() {

    const admin = {
        userName: "admin",
        password: "password1",
        country: "Czech Republic"
    }

    const [user, setUser] = useState({name:"", password:"", country:""});
    const [error, setError] = useState("");

    const Login = details => {
        console.log(details);

        if (details.name === admin.userName && details.password === admin.password /*&& details.country === admin.country*/) {
            console.log("Logged in");
            setUser({
                name: details.name,
                password: details.password,
                country: details.country
            });
        }
        else {
            console.log("Nespravne zadane udaje")
            setError("Nespravne zadane udaje")
        }
    }

    const Logout = () => {
        console.log("Logout");  
        setUser({name:"", password:"", country:""});
    }


    return (
        <div className="container">
            
          {(user.password !=="") ? (
          <div> 
            <Time/>               
          <h2>Vitejte, <span>{user.name}</span></h2>
          <button className="btn" onClick={Logout}>Odhlasit</button>
          </div>) : ( 
          <div>
            <Time/>
            <LoginForm2 Login={Login} error={error}></LoginForm2>
          </div>) }          
        </div>
    );
    
}

export default App;