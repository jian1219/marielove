import React from 'react'
import { useNavigate } from 'react-router-dom';

import '../Css/Welcome.css'


function Welcome() {

    const navigate = useNavigate();
  return (
    <div>
        <div className='content d-flex justify-content-center align-items-center vh-100'>
            <div>
                <h1 className='text-center'>HI LOVE</h1>

                <div className='d-flex justify-content-center align-items-center'>
                    <button onClick={() => navigate('/home')}>
                        Continue
                    </button>
                </div>
            </div>
    
        </div>



        <div className='notcellphone'>
            <div className='cp_content'>
                <h1>Use your Cellphone LOVE</h1>
            </div>
           
        </div>
    </div>
  )
}

export default Welcome
