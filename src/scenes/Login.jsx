import React,{useState} from "react";

import FlexBetween from '../components/FlexBetween'
import {
    Box,
    IconButton,
    Typography,
    useTheme,
    Container,
    Grid,
    TextField,
    Button,

} from "@mui/material"
import {
    EmailOutlined,
    LockOutlined,
    VisibilityOutlined,
    VisibilityOffOutlined,
 
} from "@mui/icons-material"
import GoogleIcon from '@mui/icons-material/Google';
import Axios from "axios";
import { Navigate, useNavigate }from "react-router-dom";

export const 
Login= (props) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const[pass, setPass] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isNoAccount, setIsNOAccount] = useState(false);
    const theme = useTheme();
    const handleSubmit =(e) => {
        e.preventDefault();
        console.log(email, pass);
        Axios.post("http://localhost:3002/login", {
        username: email,
        password: pass,
    })
    .then((response)=>{
        console.log(response.data.approved);
        if (response.data.approved){
            setIsLoggedIn(true);
        }
    })
    

        
    }
    
    if (isLoggedIn) {
        return <Navigate to="/dashboard" />;
    }
    if(isNoAccount){
        return <Navigate to ="/register"/>;
    }

    return (
        <Container maxWidth="xs"
            sx={{
                display:"flex",
                justifyContent:"center",
                alignItems :"center",
                minHeight :'100vh'
            }}>
            
                <Box>
                    <Typography component="h1" variant ="h5">
                        Log in to your profile
                    </Typography>
                </Box>
                <form  className="login-form" onSubmit={handleSubmit}>
                    <TextField
                        variant ="outlined"
                        type ="text"
                        margin = "normal"
                        required
                        fullWidth 
                        id = 'email'
                        label = "Username or Email"
                        name="email"
                        autoComplete="Username or email"
                        autoFocus
                        value = {email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    <TextField
                        variant ="outlined"
                        margin = "normal"
                        type="password"
                        required
                        fullWidth 
                        id = "password"
                        label = "password"
                        name="password"
                        autoComplete="*******"
                        
                        value = {pass}
                        onChange={(e) => setPass(e.target.value)}
        
                        />
                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    
                >
                    Sign In
                </Button>
                
                    {/* <label htmlFor= 'email'> email</label> */}
                    {/* <input value= {email} onChange={(e) => setEmail(e.target.value)} type = 'email' placeholder="Username or email" id = 'email' name ='email'></input> */}
                    {/* <label htmlFor= 'password'> password</label> */}
                    {/* <input value = {pass} onChange={(e) => setPass(e.target.value)} type = 'password' placeholder="*******" id = 'password' name ='password'></input> */}
                    {/* <button> Log In</button> */}
                </form>
                <Grid container spacing ={2}>
            <Grid item xs>
            
            <Button>
              <Typography variant="body2" color="textSecondary" align="center">
                Forgot password?
              </Typography>
              </Button>  
            
            </Grid>
            <Grid item>
              <Button  onClick={()=>{navigate("/register")}}>
              <Typography variant="body2" color="textSecondary" align="center">
                {"Don't have an account? Sign Up"}
              </Typography>
              </Button>
            </Grid>
          </Grid>
          
    
            
        </Container>
            
    )
}