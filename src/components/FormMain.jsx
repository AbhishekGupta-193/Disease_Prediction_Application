import React from 'react'
import Heart from './heart'
import Diabetes from './diabetes'
import Parkinsons from './parkinsons'
import '../styles/Form.css'

export const FormMain = ({page}) => {
  return (
    <div className='form-main-wrp'>
      {page==='heart' && <Heart/>}
      {page==='diabetes' && <Diabetes/>}
      {page==='parkinsons' &&  <Parkinsons/>}
    </div>
    
  )
}
