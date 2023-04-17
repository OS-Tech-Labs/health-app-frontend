import React, { useState ,useRef, Fragment, useEffect} from 'react';

import FlexBetween from '../../components/FlexBetween'
import {
    //Box,
    IconButton,
    TextField,
    Typography,
    Paper,
    Container,
    Grid,
    Divider,
    List,
    ListItem,
    ListItemText,
    FormControl
} from "@mui/material"
import {Box} from "@mui/system"
import {
    Height,
    SendOutlined,
    SettingsCellSharp
} from "@mui/icons-material"
import Axios from "axios";
import { chatMessageDto } from '../../model/chatMessageDto';
import './chat.css'
const Chat =() => {
    const webSocket = useRef(null);
    const [chatMessages, setChatMessages] = useState([
        // new chatMessageDto('Omalya', 'Hi')
    ]);
    const [user, setUser] = useState("me");
    const [message, setMessage]= useState("");
    useEffect(()=>{
        console.log("Opening WwebSocket");
        webSocket.current = new WebSocket("ws://localhost:3002/chat");
        webSocket.current.onopen = (event)=>{
            console.log('Open:', event);
        }
        webSocket.current.onclose = (event)=>{
            console.log('Close:', event);
        }
        
        return()=>{
            console.log('Closing WebSocket')
            webSocket.current.close(); 
        }
    },[])
    useEffect(()=>{
        webSocket.current.onmessage =(event)=>{
            const chatMessageDto = JSON.parse(event);
            console.log('Message:',chatMessageDto);
            SettingsCellSharp([...chatMessages,{
                user: chatMessageDto.user,
                message: chatMessageDto.message
            }])
        }
    }, [chatMessages]);

    const handleMessageChange = (event) =>{
        setMessage(event.target.value);
    }

    const sendMessage =()=>{
        if(message){
            webSocket.current.send(
                JSON.stringify(new chatMessageDto(user, message))
            );
            setMessage('');
            console.log("sent!")
            
        }
        
    }
    const listChatMessages = chatMessages.map((chatMessage_Dto, index)=>{
            return(
                <ListItem key ={index}>
                 <ListItemText primary={`${chatMessage_Dto.user} : ${chatMessage_Dto.message}`}/>
                
            </ListItem>
            )
           
    });
    
    // const handleSendClick = () => {
    //     const inputValueTrimmed = inputValue.trim();
    //     if(! inputValueTrimmed){
    //         return;
    //     }
    //     console.log(inputValueTrimmed);
    //     Axios.post("http://localhost:3002/login",{
    //         message: inputValueTrimmed})
    //     setMessages = [...messages, {sender:'me', body :inputValueTrimmed}];
    //     setInputValue('');
    //     inputRef.current.focus();
    // };

    return (
        <Fragment >
            <Container >
                <Paper elevation={5}>
                    <Box p ={3}>
                        <Typography variant='h4' gutterBottom>
                            Happy chatting!
                        </Typography>
                        <Divider/>
                        <Grid container spacing={4} alignments= "center" >
                            <Grid id = "chat-window" item xs={12} >
                                <List id = "chat-window-messages"   >
                                    {listChatMessages}
                                </List>
                            </Grid>
                            {/* <Grid  item>
                                    <Box>
                                    <Typography>
                                        {user}
                                    </Typography>
                                    </Box>
                            </Grid> */}
                            <Grid xs={10} item>
                            <FormControl fullWidth>
                                    <TextField
                                    onChange={handleMessageChange}
                                    vlaue = {message}
                                    label ="Type a message"
                                    variant='outlined'/>
                                </FormControl>
                            </Grid>
                            <Grid xs={1} item>
                                <IconButton
                                    onClick={sendMessage}
                                    aria-label='send'
                                    color='primary'
                                    >
                                    <SendOutlined/>
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Box>

                </Paper>
            </Container>
        </Fragment>
    );
};

export default Chat;