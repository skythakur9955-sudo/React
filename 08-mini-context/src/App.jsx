
import './App.css'
import Login from './Comoponent/login'
import Profile from './Comoponent/Profile'
import UserContext from './context/UserContext'
import UserContextProvideor from './context/UserContextProvideor'

function App() {
 

  return (
    <UserContextProvideor>
     <h1>Hello EveryOne</h1>
     <Login />
     <Profile />
    </UserContextProvideor>
  )
}

export default App
