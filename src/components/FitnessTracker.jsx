import React from 'react'
import Nav from './Nav'
import Watch from '../assets/watch'

function FitnessTracker() {
  return (
    <div className='d-flex flex-column justify-content-between' style={{height: '100vh'}}>
      <div>
        <Nav />
        <div className='title'>
          <h2>Your <br /> Fitness Tracker</h2>
        </div>
        <div className='d-flex justify-content-between action-buttons'>
          <div><button>Connected Devices</button></div>
          <div><button>Statistcs</button></div>
        </div>
      </div>
      <div>
        <div className='product-container'>
          <div className='layer1'></div>
          <div className='layer2'></div>
          <div className='layer3'>

          </div>
          <div className='img-watch'>
            <Watch />
          </div>
        </div>
      </div>
      <div>
        <div>
          <div></div>
          <div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className='d-flex flex-column ms-auto'>
          <span>Add Details</span>
          <div><input type='text' /></div>
          <div className='d-flex'>
            <div><input type='text' /></div>
            <div><input type='text' /></div>
          </div>
          <div><input type='select' /></div>
          <div><input type='select' /></div>
          <div><input type='select' /></div>
          <div><button>Statistcs</button></div>
        </div>
      </div>
    </div>
  )
}

export default FitnessTracker