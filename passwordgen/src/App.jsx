import React, { useState } from 'react'

const App = () => {

  const [lengthBar, setlengthBar] = useState(10)
  const [numbers, setlNumbers] = useState(false)
  const [chars, setChars] = useState(false)
  const [password, setPassword] = useState('password123')

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input className='bg-white outline-none w-full py-1 px-3' placeholder='Password' readOnly type="text" value={password} />
        <button className='bg-blue-600 outline-none text-white py-2 shrink-0 px-3'>Copy</button>
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default App