import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [Counter, setCounter] = useState(5)

  //let Counter = 5

  const AddValue = () => {
    
    
    //Counter = Counter + 1
    setCounter((prevCounter)=>prevCounter+1)
    setCounter((prevCounter)=>prevCounter+1)
    setCounter((prevCounter)=>prevCounter+1
  
  )

  }

  const RemoveValue = () => {
    setCounter(Counter-1)
  }
  

  return (
    <>
     <h1>badal leran react</h1>
     <h2>Counter value: {Counter}</h2>
     <button onClick={AddValue}>Add value {Counter}</button>
     <br />
     <button onClick={RemoveValue}>Remove value {Counter}</button>
     <p>footer: {Counter} </p>
    </>
  )
}

export default App

