import React from 'react'
import pen_logo_mesa from '../Img/pen-logo-mesa.svg';

export const CustomLoader = () => {
  return (
    <div className='mx-auto w-100 monochrome text-center animate__animated animate__pulse animate__infinite infinite'>
        <img alt='Cargando..' src={pen_logo_mesa} width={200}/>
    </div>
  )
}
