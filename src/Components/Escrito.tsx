import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import moment from 'moment'
import 'moment/locale/es';

export const Escrito = ({id_escrito, escrito, fecha, autor, contacto, titulo}:any) => {
  const location = useLocation();
  
  return (
    <article className='col-12 col-md-12 col-lg-6 w-s-pre m-2 p-3 text-center escrito bg-dark'>
        <h1 className='mb-4'>{titulo}</h1>
        <p>"{escrito}"</p>
        <br/>
        {location.pathname.includes('escritos') ? <Link to={`/escritos/${id_escrito}`} className='leaf'>Abrir</Link> : <></>}
        <br/>
        <br/>
        <p className='fs-0 mt-4'><b>Autor: &nbsp;</b>{autor}, {moment(fecha).format('dddd Do MMMM YYYY hh:mm')}</p><br/>
        <p className='fs-0 b-w'><b>Contacto: &nbsp;</b><a href={contacto} target='_blank' rel='noopener noreferrer' > {contacto}</a></p>
    </article>
  )
}