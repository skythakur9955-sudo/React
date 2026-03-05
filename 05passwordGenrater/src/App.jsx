import { useState, useCallback, useEffect, useRef } from 'react'

import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [passowrd, setpassword] = useState("")

  // useRef hook
  const passowrdRef = useRef(null)

  const passowrdGenrator = useCallback( () => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%&*^"

    for (let i = 1; i <= length; i++) {
     let char =  Math.floor(Math.random()*str.length +1 )
     pass += str.charAt(char)
      
    }

    setpassword(pass)




  }, [length, numberAllowed, charAllowed, setpassword ])

  const copyPasswordToClipboard = useCallback(()=>{
    passowrdRef.current?.select()
    passowrdRef.current?.setSelectionRange(0,88)
    window.navigator.clipboard.writeText(passowrd)
  }, [passowrd])

  useEffect(() => {
    passowrdGenrator()
  }, [length, numberAllowed, charAllowed, passowrdGenrator])


  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700' > 
      <h1 className='text-white text-center my-3' > password Gentrator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4' >
     <input type="text"
     value={passowrd}
     className=' outline-none w-full py-1 px-3 bg-white text-gray-800'
     placeholder='Password'
     ref={passowrdRef}
     
     readOnly
     
      />
      <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-2 py-0.5 shrink-0' >Copy</button>
      </div>
      <div className='flex text-sm gap-x-2' >
        <div className='flex items-center gap-x-1' >
          <input type="range" 
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{e, setlength(e.target.value)}}
           />
           <label >length: {length} </label>
        </div>
        <div className='flex items-center gap-x-1'  >
          <input type="checkbox"
          defaultChecked = {numberAllowed}
          id='numberInput'
          onChange={()=>{
            setnumberAllowed((prev) => !prev );
          }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1' >
          <input type="checkbox" 
          defaultChecked= {charAllowed}
          id='characterInput'
          onChange={()=>{
            setnumberAllowed((prev) => !prev );
          }}
          />
          <label htmlFor="characterInput">Charaters</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
