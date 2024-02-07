import React from 'react'
import './index.css'
import StepRing from '../../assets/steps-ring'
import ActivityRing from '../activityRing'

function Statistics() {
  return (
    <div className='d-flex flex-row my-4 mx-3 justify-content-between'>
      <div>
        <div className='steps-container d-flex justify-content-center align-items-center'>
          <ActivityRing steps={5000} goal={10000}/>
        </div>
      </div>
      <div>
        <div className='d-flex flex-column'>
          <div className='tracking-summary d-flex flex-column align-items-center justify-content-center'>
            <span className='content-name'>Calories</span>
            <span className='content-value'>1200 Kcal</span>
          </div>
          <div className='tracking-summary d-flex flex-column align-items-center justify-content-center mt-2'>
            <span className='content-name'>Water</span>
            <span className='content-value'>1.8 Ltrs</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Statistics