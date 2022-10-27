import React from 'react'
import ink_pen from '../Img/ink-pen.svg'

export const Contacto = () => {
  return (
    <div className='animate__animated animate__fadeInUp d-flex justify-content-center row my-15'>
      <div className='col-12 mx-auto col-md-3 my-6 text-center'>
          <h1 className='text-center my-5'>Contacto</h1>
          <img alt='contacto' className='monochrome'  width={200} src={ink_pen}/>
      </div>
      <section className='text-center'>
        <p>Si te interesa saber más del proyecto, o ver otros proyectos te invito a ver mi portfolio.</p><br/>
        <a href='https://cristian021195.github.io/portfolio/' className='mt-5 leaf' target='_blank' rel='noopener noreferrer'>Ver Portfolio</a>
      </section>
    </div>
  )
}
