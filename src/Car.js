import React from 'react'
import ButtonPrimary from './ButtonPrimary'
import ButtonSecondary from './ButtonSecondary'
import './Car.css'

function Car({ imgSrc, model, testDrive }) {
  return (
    <div className='car'>
      <div className='car__image'>
        <img src={imgSrc} alt={model} />
      </div>
      <h2 className='car__model'>{model}</h2>
      <div className='car__actions'>
        <ButtonPrimary name='order' />
        {testDrive && <ButtonSecondary name='test drive' />}
      </div>
      <div className='car__info'>
        <span>Request a Call</span> to speak with a product specialist, value
        your trade-in or apply for leasing
      </div>
    </div>
  )
}

export default Car