import React, {useEffect,useState} from 'react'
import styled from 'styled-components'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ChatInfo from './ChatInfo'
import ChatMessage from './ChatMessage'
import db from '../firebase'
import { useParams } from 'react-router-dom';
import firebase from 'firebase'

function Chat({ user }) {
     let   { channelId } = useParams();
     const [channel, setChannel] = useState();
     const [messages, setMessages] = useState([]);
    const getMessages =() =>{
        db.collection('rooms')
        .doc(channelId)
        .collection('messages')
        .orderBy('timestamp','asc')
        .onSnapshot((snapshot)=>{
            let messages = snapshot.docs.map((doc)=> doc.data());
            console.log(messages)
            setMessages(messages)
        })
    }
    const sendMessage =(text)=>{
        if(channelId){
            let payload ={
                text: text,
                timestamp: firebase.firestore.Timestamp.now(),
                user: user.name,
                userImage: user.photo
            }
            db.collection('rooms').doc(channelId).collection('messages').add(payload)
        }
    }
    const getChanel =()=>{
        db.collection('rooms')
        .doc(channelId)
        .onSnapshot((snapshot)=>{
            setChannel(snapshot.data())
        })

    }  
     useEffect(()=>{
        getChanel();
        getMessages();
     }, [channelId] )
    return (
        <Container>
            <Header>
                <Chanel>
                    <ChanelName>
                        # {channel && channel.name}
                    </ChanelName>
                    <ChanelInfo>
                        Company-wide announcements and work based matters
                    </ChanelInfo>

                </Chanel>
                <ChanelDetails>
                    <div>Details</div>
                    <Info />
                     
                </ChanelDetails>

            </Header>
            <MessageContainer>
            {console.log(messages.length)}
                {
                    
                    messages.length > 0 &&
                    messages.map((data, index)=>(
                        <ChatMessage 
                        text={data.text}
                        name={data.user}
                        image={data.userImage}
                        timestamp={data.timestamp}
                         />
                    ))
                }
                
            </MessageContainer>
            <ChatInfo sendMessage= {sendMessage}/>

        </Container>
    )
}

export default Chat
const Container = styled.div`
    display: grid;
    grid-template-rows: 65px auto min-content;
    min-height: 0;
`
const Header =styled.div`
    padding-left: 20px;
    paading-right: 20px;
    display: flex;
    align-items: center;
    border-bottom: solid 1px rgb(83, 39, 83, .13);
    justify-content: space-between;

`
const Chanel = styled.div`

`
const ChanelName = styled.div`
    font-wight: 600;
`
const ChanelInfo = styled.div`
    font-weight: 400;
    color: #606060;
    font-size: 13px;
    margin-top: 8px;

`
const ChanelDetails = styled.div`
    display: flex;
    align-items: center;
`
const MessageContainer =styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: scroll;

`
const Info =styled(InfoOutlinedIcon)`
    margin-left: 10px;
`