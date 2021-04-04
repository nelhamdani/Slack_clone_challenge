import React, { useState } from 'react'
import styled from 'styled-components'
import SendIcon from '@material-ui/icons/Send';
function ChatInfo({ sendMessage }) {
    const [input, setInput] = useState("")

    const send =(e)=>{
        e.preventDefault();
        if (!input) return;
        sendMessage(input)
        setInput("")
    }

    return (
        <Container>
            <InputContainer>
                <form>
                    <input onChange={(e)=> setInput(e.target.value)}
                    type="text"
                    value={input}
                     placeholder="Enter your Message here..."/>
                    <SendButton 
                    type= "submit"
                    onClick= {send}>
                        <Send />
                       
                    </SendButton>
                </form>
            </InputContainer>
        </Container>
    )
}

export default ChatInfo
const Container = styled.div`
padding-left: 20px;
padding-right: 20px;
padding-buttom: 24px;
`
const InputContainer = styled.div`
    border: solid 1px #8d8d8e;
    border-radius: 4px;
    form{
        display: flex;
        height: 42px;
        align-items: center;
        padding-left: 10px;
        input{
            border:none;
            flex:1;
            font-size: 13px;
        }
        input:focus{
            outline: none;
        }
    }
 `
 const SendButton = styled.button`
    background: #007a5a;
    height: 32px;
    width: 32px;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
    border: none;
    cursor: pointer;
    .MuiSvgIcon-root{
        width: 18px;
    }
    :hover{
        background: #148567;
    }
 `
 const Send = styled(SendIcon)`
 color: #d9d9d9;
 `

