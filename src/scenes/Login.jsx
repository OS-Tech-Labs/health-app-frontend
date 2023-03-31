import React,{useState} from "react";
import Axios from "axios";
import { Navigate } from "react-router-dom";
export const 
Login= (props) => {
    const [email, setEmail] = useState('');
    const[pass, setPass] = useState('');

    const handleSubmit =(e) => {
        e.preventDefault();
        console.log(email, pass);
        Axios.post("http://localhost:3001/login", {
        username: email,
        password: pass,
    })
    .then((response)=>{
        if (response.data.approved){
            return <Navigate to= "/dashboard" ></Navigate>
        }
    })
    }

    return (
        
            <div className="form-container">
                <form  className="login-form" onSubmit={handleSubmit}>
                    <label htmlFor= 'email'> email</label>
                    <input value= {email} onChange={(e) => setEmail(e.target.value)} type = 'email' placeholder="Username or email" id = 'email' name ='email'></input>
                    <label htmlFor= 'password'> password</label>
                    <input value = {pass} onChange={(e) => setPass(e.target.value)} type = 'password' placeholder="*******" id = 'password' name ='password'></input>
                    <button> Log In</button>
                </form>
                <button className="link-btn" onClick={() =>props.onFormSwitch('register')}>Don't have an account? Register here. </button>
            </div>
            
    )
}