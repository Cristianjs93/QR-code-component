import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
        <div className='QR'>
          <img src="/QR-code.png" className='QR__img'/>
          <h1 className='QR__title'>Improve your front-end skills by building projects</h1>
          <p className='QR__paragraph'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
          </p>
        </div>
   
  )
}

export default App
