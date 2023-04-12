import React, { useState ,useRef} from 'react';
import FlexBetween from '../components/FlexBetween'
import {
    Box,
    IconButton,
    TextField,
    Typography,
    useTheme
} from "@mui/material"
import {
    Height,
    SendOutlined
} from "@mui/icons-material"
import Axios from "axios";

const Chat =() => {
    
    const [messages, setMessages] = useState([]);
    const inputRef = useRef(null);
    const [inputValue , setInputValue] = useState('');
    const handleInputCahnge = (event) => {
        setInputValue(event.target.value);
    };
    const handleSendClick = () => {
        const inputValueTrimmed = inputValue.trim();
        if(! inputValueTrimmed){
            return;
        }
        console.log(inputValueTrimmed);
        Axios.post("http://localhost:3002/login",{
            message: inputValueTrimmed})
        setMessages = [...messages, {sender:'me', body :inputValueTrimmed}];
        setInputValue('');
        inputRef.current.focus();
    };

    return (
        <Box 
        sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',

        }}>
        <Box 
            sx={{
                flex: 1,
                overflowY: 'scroll',
                padding: 2,
            }} >
            {messages.map((message, index)=>(
                <Box key={index} 
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginBottom: 1,
                    }}>
                <Box 
                    sx={{
                        fontWeight: 'bold',
                        marginBottom: 0.5,
                    }}>
                        {message.sender}
                </Box>
                <Box
                    sx={{
                        wordBreak: 'break-word',
                    }}>
                        {message.body}
                </Box>
                </Box>

            ))}
        </Box>
        <Box 
        sx={{
            display: 'flex',
            padding: 2,
        }}>
            <TextField 
            sx={{
                marginRight: 1,
                flex: 1,
            }}
            
            variant="filled"
            label="Type a message..."
            value={inputValue}
            onChange={handleInputCahnge}
            inputRef={inputRef}>
            </TextField>
            <IconButton onClick={handleSendClick}>
                <SendOutlined/>
            </IconButton>
        </Box>
        </Box>
    );
};

export default Chat;