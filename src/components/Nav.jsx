import React from 'react'
import ContactIcon from '../assets/contact'
import BackArrow from '../assets/back-arrow'
import BackArrowOutline from '../assets/back-arrow-outline'

function Nav() {
  return (
    <div className='nav d-flex justify-content-between'>
      <div style={{ position: 'relative' }}>
        <div>

          <BackArrow />
        </div>
        <div style={{position: 'absolute', top: '16px', left: '24px'}}>

          <BackArrowOutline />
        </div>
      </div>
      <div><ContactIcon /></div>
    </div>
  )
}

export default Nav