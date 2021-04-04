 
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import  Chat  from './components/Chat'
import Login from './components/Login'
import styled from 'styled-components'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import db from './firebase'
import {useEffect, useState} from 'react'
import {auth, provider} from './firebase'

function App() {
  const [rooms, setRooms] = useState([])
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
  const getChannels =() =>{
    db.collection('rooms').onSnapshot((snapshot)=>{
      setRooms (snapshot.docs.map((doc)=>{
        return {id: doc.id, name: doc.data().name}
      }))
    })
  }
  
  useEffect(() => {
    getChannels()
  },[])

    const signOut =() =>{
      auth.signOut().then(()=>{
        localStorage.removeItem('user')
        setUser(null)
      })
    }
   console.log("user in app state : ", user)
  return (
    <div className="App">
    <Router>
      {
        !user ?
        <Login setUser={setUser}/>
        :
     
      <Container>
        <Header signOut={signOut} user={user}/>
        <Main>
          <Sidebar rooms= {rooms} />
          <Switch>
            <Route path="/room/:channelId">
              <Chat user= {user} />
            </Route>
            <Route path="/">
              select or create chanel
            </Route>
          </Switch>
        </Main>
      </Container>
       }
    </Router>
    </div>
  );
}

export default App;
 const Container = styled.div`
  weight: 100%;
  height: 100vh;
  background-color: purple;
  display: grid;
  grid-template-rows: 40px minmax(0, 1fr);
 `

 const Main = styled.div`
 display: grid;
 grid-template-columns: 260px auto;
 background-color: white;
 `
