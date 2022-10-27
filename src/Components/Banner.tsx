import React from 'react'
import Books from '../Img/Books.svg';

export const Banner = () => {
  return (
    <section className='banner text-center container-fluid row animate__animated animate__fadeInUp my-15'>
        <article className='col-md-6 col-12 standard p-4 text-left pt-5'>
            <h2 className='text-medium-gray mt-5'>Mis escritos, día a día.</h2>
            <h3 className='text-smoke mt-5'>Escritos, poemas, citas y frases que pueden gustarte.</h3>
            <br/>
            <p></p>
        </article>
        <article className='col-md-6 col-12 d-flex justify-content-center'>
            <div>
              <img alt='user' className='landing-img' src={Books}/>
            </div>
        </article>
    </section>
  )
}
