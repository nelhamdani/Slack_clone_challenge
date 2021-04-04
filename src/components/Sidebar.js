import React from 'react'
import styled from 'styled-components'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {SidebarItems} from '../Data/SidebarData';
import {ChanelsItems} from '../Data/SidebarData';
import AddIcon from '@material-ui/icons/Add';
import db from '../firebase'
import { useHistory } from 'react-router-dom'

function Sidebar(props) {
    const history = useHistory();
    const goToChanel = (id) => {
        if(id){
            console.log(id);
            history.push(`/room/${id}`);
        }
    }

    const addChanel= ()=>{
        const promptName = prompt("Enter the Chanel name please!")
        if(promptName){
            db.collection("rooms").add({
                name: promptName
            })
        }
    }
    return (
        <Container>
             <WorkspaceContainer>
                 <Name>
                     popkorn
                 </Name>
                 <NewMessgae>
                    <AddCircleOutlineIcon />
                 </NewMessgae>
            </WorkspaceContainer> 
            <MainChannels>
                {
                    SidebarItems.map(items=>
                        <MainChannelItem>
                         {items.icon}
                         {items.text}
                        </MainChannelItem>  )

                }
              
            </MainChannels> 
            <ChanelsContainer>
                <NewChanelContainer>
                    <div>Chanels</div>
                    <AddIcon onClick={addChanel}/>
                </NewChanelContainer>
                <ChanelsList>
                   {
                       props.rooms.map(item =>(
                           <Chanel onClick={()=>goToChanel(item.id)}>
                               # {item.name}
                           </Chanel>
                       ))
                   }

                </ChanelsList>
            </ChanelsContainer>
        </Container>
    )
}


export default Sidebar
const Container = styled.div`
background: #3f0e40`
const WorkspaceContainer = styled.div`
    color: white;
    height: 64px;
    display: flex;
    align-items: center;
    padding-left: 19px;
    justify-content: space-between;
    padding-right: 6px;
    border-bottom: 1px solid #532753;
`
const Name = styled.div`

`
const NewMessgae = styled.div`
    width: 36px;
    height: 36px;
    background: white;
    color: #3f0e40;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`
const MainChannels= styled.div`
    padding-top: 20px;
`
const MainChannelItem= styled.div`
    color: rgb(188,171,188);
    diplay: grid;
    grid-template-columns: 15% auto;  
    height: 28px;
    align-items: center;
    padding-left: 19px;
    cursor: pointer;
    :hover {
        background: #350d36;
    }
`
const ChanelsContainer = styled.div`
color: rgb(188,171,188);
margin-top: 10px;

`

const NewChanelContainer = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    height: 28px;
    padding-left: 19px
`
const ChanelsList = styled.div``
const Chanel = styled.div`
display: flex;
align-items: center;
padding-left: 19px;
height: 28px;
    :hover {
        background: #350d36;
    }
`
