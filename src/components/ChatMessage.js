import React from 'react'
import styled from 'styled-components'

function ChatMessage({text, name, image , timestamp}) {
    return (
        <Container>
            <UserAvatar>
                <img src={image}/>

            </UserAvatar>
            <MessageContent>
                <Name>
                    
                    {name}
                </Name>
                <span>{new Date(timestamp.toDate()).toUTCString()}</span>
                <Text>
                    {text}
                </Text>
            </MessageContent>
        </Container>
    )
}

export default ChatMessage
const Container= styled.div`
padding: 8px 20px;
display: flex;
align-items: center;
`
const UserAvatar = styled.div`
height: 36px;
width: 36px;
border-radius: 2px;
margin-right: 8px;
overflow: hidden;
    img{
        width: 100%;
        
    }

`
const MessageContent = styled.div`
    display: flex;
    flex-direction: column;
`
const Name = styled.span`
font-weight: 900;
font-size: 15px;
line-height: 1.4;
span{
    margin-left: 8px;
    font-weight: 400;
    color: rgb(97,96,97);
    font-size: 13px;
}

`
const Text = styled.span`

`
