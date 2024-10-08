import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col gap-12 md:flex-row md:justify-between'>
      <ul className='flex gap-2 font-lato text-gray-500'>
        <li><a href="#">FaceBook</a></li>
        <li><a href="#">Instagram</a></li>
        <li><a href="#">Twitter</a></li>
      </ul>
      <div>
        <img src="./assets/Help-Avatar.svg" alt="help" />
        <div>
            <p className='font-playfair font-thin'>Have any question?</p>
            <a href="#" className='font-lato font-medium'>Talk to a specialist</a>
        </div>
      </div>
    </div>
  )
}

export default Footer
