import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { DataHeader } from "../Helpers/DataHeader";
import pen from '../Img/pen-logo.svg';

export const Header = () => {
  const [desplegable, setDesplegable] = useState(false);
  
  return (
    <>
      <header className='container-fluid d-flex justify-content-between'>
          <span className='brand-title-diff d-flex align-items-center'>&lt;<h2 className='brand-title'>&nbsp;Escritos&nbsp;</h2> /&gt;</span>
          <div className='d-flex'>
            <img className={desplegable === true ? 'd-md-none b-bottom monochrome' : 'd-md-none monochrome'} onClick={()=>setDesplegable(!desplegable)} src={pen} width={20} alt='desplegar menú'/>
          </div>
          <ul className='d-none d-md-flex align-items-center'>
            {DataHeader.map((li,li_i)=><li key={li_i}><NavLink className={({isActive})=> isActive === true ? 'actual' : ''} to={li.item}>{li.alias}</NavLink></li>)}
          </ul>
      </header>
      <ul className={desplegable === true ? 'desplegable text-center p-2 d-md-none animate__animated animate__fadeInDown' : 'desplegable hide-desplegable text-center p-2 animate__animated animate__fadeOutUp d-none'}>
        {DataHeader.map((li,li_i)=><li key={li_i}><NavLink className={({isActive})=> isActive === true ? 'actual' : ''} to={li.item}>{li.alias}</NavLink></li>)}
      </ul>
    </>
  )
}