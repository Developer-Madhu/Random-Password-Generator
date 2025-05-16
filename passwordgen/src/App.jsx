import React, { useCallback, useEffect, useState } from 'react'

const App = () => {

  const [lengthBar, setlengthBar] = useState(10)
  const [numbers, setNumbers] = useState(false)
  const [chars, setChars] = useState(false)
  const [password, setPassword] = useState('password123')

  const generatePassword = useCallback(() => {
    let pass = ''
    const strs = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if(numbers){
      strs += '0123456789'
    }
    else if(chars){
      strs += '!@#$%^&*()_+'
    }

    for(let i=0; i<lengthBar; i++){
      let randomChar = Math.floor(Math.random() * strs.length + 1) 
      pass += strs.charAt(randomChar)
    }
    setPassword(pass)

  }, [lengthBar, numbers, chars])

  useEffect(() => {
    generatePassword()
  }, [lengthBar,numbers, chars])

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input className='bg-white outline-none w-full py-1 px-3' placeholder='Password' readOnly type="text" value={password} />
        <button className='bg-blue-600 outline-none cursor-pointer text-white py-2 shrink-0 px-3'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input className='cursor-pointer' onChange={(e) => setlengthBar(e.target.value)} type="range" name='' id='' value={lengthBar} min={6} max={20} />
          <label htmlFor="length">Length: {lengthBar}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input className='cursor-pointer' onChange={() => setNumbers(prev => !prev)} defaultChecked={numbers} type="checkbox" name='' id='' />
          <label htmlFor="numbers">Numbers</label>
        </div> 
        <div className='flex items-center gap-x-1'>
          <input className='cursor-pointer' onChange={() => setChars(prev => !prev)} defaultChecked={chars} type="checkbox" name='' id='' />
          <label htmlFor="chars">Characters</label>
        </div>  
      </div>
      </div>
  )
}

export default App