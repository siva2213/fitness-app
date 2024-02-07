import React from 'react'
import ContactIcon from '../assets/contact'
import BackArrow from '../assets/back-arrow'
import BackArrowOutline from '../assets/back-arrow-outline'

function Nav() {
  return (
    <div className='nav d-flex justify-content-between'>
      <div className='nav-container'>
        <div>

          <BackArrow />
        </div>
        <div className='nav-back-arrow-outline'>

          <BackArrowOutline />
        </div>
      </div>
      <div><ContactIcon /></div>
    </div>
  )
}

export default Nav