import React from 'react'
import styled from 'styled-components'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

function Header({user, signOut}) {
    return (
        <Container>
            <Main>
                <AccessTimeIcon />
                <SearchContainer>
                    <Search>
                        <input type="text" placeholder="search..."/>
                    </Search>
                </SearchContainer>
                <HelpOutlineIcon />
            </Main>
           <UserContainer>
                <Name>{user.name}</Name>
                <UserImage onClick={signOut}>
                    <img src={user.photo ? user.photo : "https://i.imgur.com/6VBx3io.png"}/>
                </UserImage>
           </UserContainer>
        </Container>
    )
}

export default Header
const Container = styled.div`
    z-index: 10;
    box-shadow: inset 0 0 0 1px rgb(104 74 104);
    display:flex;
    align-items: center;
    justify-content: space-evenly;
    color: white;
`
const Main = styled.div`
     display:flex;
     margin-left: 16px;
     margin-right: 16px;
`
const SearchContainer = styled.div`
    min-width: 400px;
    margin-left: 16px;
    margin-right: 16px;
`
const Search = styled.div`
    width: 100%;
    border-radius: 6px;
    display: flex;
    align-items: center;
    input{
        background-color: transparent;
        border:none;
        padding: 4px 8px 4px 8px;
        color:white;
    }
    input: focus{
        outline:none;
    }
`
const UserContainer = styled.div`
    display:flex;
    align-items: center;
    padding-right: 16px;
    position: absolut;
    right:0;
`
const Name = styled.div`
    padding-right: 16px;
`
const UserImage  = styled.div`
    width: 28px;
    height: 28px;
    border: 2px solid white;
    border-radius: 3px;
    cursor: pointer;
    img{
        width: 100%;
    }
`
