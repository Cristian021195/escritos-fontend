import React from 'react'
import { useSelector } from 'react-redux'
import { Wave } from './Wave'

export const Footer = () => {
  const tema = useSelector((state:any)=>state.theme.theme);
  return (
    <footer className={`d-flex justify-content-center align-items-end d-md-flex mty-10`}>
      <div className='footer-content row'>
        <div className='col-12'>
          <h2>
            Hecho con <span role='img' aria-label='heart / corazon'>❤️</span>, 04/04/2022 - Sobre mí: <a href='https://cristian021195.github.io/portfolio/'>Cristian Gramajo</a>
          </h2>
        </div>
      </div>
      <Wave backgroundColor={tema=== 'oscuro' ? '#0f0f0f' : '#a0a0a0'}/>
    </footer>
  )
}
