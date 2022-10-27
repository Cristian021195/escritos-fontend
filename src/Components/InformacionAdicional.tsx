import React from 'react'
import { Fade } from 'react-awesome-reveal';
import paint_splash from '../Img/paint-splash.svg';
import paisaje from '../Img/paisaje.svg';

export const InformacionAdicional = () => {    
  return (
    <section className='banner container-fluid row text-center'>
            <h1 className='animate__animated animate__fadeIn pregunta'>¿Por qué hago esto?</h1>
                <article className='col-md-6 col-12 d-flex justify-content-center my-10'>
                    <Fade direction='left' triggerOnce={true}>
                        <img alt='user' className='landing-img' src={paint_splash}/>
                    </Fade>
                </article>
                <article className='col-md-6 col-12 my-10 text-left'>
                    <Fade direction='right' triggerOnce={true}>
                        <p>En principio este proyecto lo hice para practicar React JS. Ahora de vez en cuando voy a escribir cualquier texto corto que se me ocurra.
                        <br/>En web App no solo hay escritos míos, sino consumidos de una api externa, donde hacen citas de textos en distintos idiomas que tambien pueden gustarte.
                        <br/>Los servicios y aplicaciones que usé:</p>
                        <div className='d-flex justify-content-center'>
                            <ul className='listado m-4'>
                                <li>Heroku</li>
                                <li>Firebase Hosting</li>
                                <li>Adobe XD</li>
                            </ul>
                        </div>
                    </Fade>
                </article>

            <h1 className='animate__animated animate__fadeIn pregunta'>¿Que tiene de interesante?</h1>
            <div className='inverter d-flex'>
                <article className='col-md-6 col-12 my-10 text-left'>
                    <Fade direction='left' triggerOnce={true}>
                        <p>Es algo bastante simple, el diseño estético es su fuerte, además de ello puede notificarte cuando un nuevo escrito sea creado.<br/>
                        Algunas de las tecnologías y recursos usados en este proyecto son:</p>
                        <div className='d-flex justify-content-center'>
                            <ul className='listado m-4'>
                                <li>React JS</li>
                                <li>Redux</li>
                                <li>React Redux</li>
                                <li>React Awesome Reveal</li>
                                <li>React Router v6</li>
                                <li>Bootstrap grid system</li>
                                <li>Animate.css</li>
                                <li>OneSignal</li>
                                <li>Fuentes: Dancing Script y Old Standard</li>
                                <li>Moment js</li>
                            </ul>
                        </div>
                    </Fade>
                </article>
                <article className='col-md-6 col-12 d-flex justify-content-center my-10'>
                    <Fade direction='right' triggerOnce={true}>
                        <img alt='user' className='landing-img' src={paisaje}/>
                    </Fade>
                </article>
            </div>
    </section>
  )
}