import React from 'react'

import CountdownToJune7 from '../components/CountdownToJune7'

function Home() {
  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
      <div>
      <h1 className=''>I LOVE YOU kiss ko b</h1>

      <div className='background-count'>
        <h3 className='text-center'>Challenge baby love</h3>
        < CountdownToJune7 />
      </div>

      <div className='d-flex justify-content-center align-items-center'>
        <button className='pause-button'>PAUSE</button>
      </div>

      </div>
    
    </div>
  )
}

export default Home
