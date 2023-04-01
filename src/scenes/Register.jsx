import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
export  const Register= (props) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const handleSubmit =(e) => {
        e.preventDefault();
        console.log(email);
    }
    return (
        <>
            <div className="form-container">
                <form className="register-form" onSubmit={handleSubmit}>
                    <label htmlFor="name">Full name</label>
                    <input value= {name} name = 'name' id = 'name' placeholder="Full name"></input>
                    <label htmlFor= 'email'> email</label>
                    <input value= {email} onChange={(e) => setEmail(e.target.value)} type = 'email' placeholder="email" id = 'email' name ='email'></input>
                    <label htmlFor= 'password'> password</label>
                    <input value = {pass} onChange={(e) => setPass(e.target.value)} type = 'password' placeholder="*******" id = 'password' name ='password'></input>
                    <button> Sign In</button>
                </form>
                <button className="link-btn" onClick={() =>{navigate("/")}}>Already have an account? Login here. </button>
            </div>
        </>
    )
}

