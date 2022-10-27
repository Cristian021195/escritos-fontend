import React from 'react'
import configuracion from '../Img/configuracion.svg';
import { useDispatch, useSelector } from 'react-redux';
import { themeAction } from '../Actions/themeAction';
import { notificationAction } from '../Actions/notificationAction';
import { fontAction } from '../Actions/fontAction';
import OneSignal from 'react-onesignal';

interface ISelector {
  theme?:any
  notification?:any
  font?:any
}

export const Configuracion = () => {
  const dispatch = useDispatch();
  const tema = useSelector((state:ISelector)=>state.theme.theme)
  const notification = useSelector((state:ISelector)=>state.notification.notification)
  const font = useSelector((state:ISelector)=>state.font.font)
  const listenChanges = (e:any) =>{
    if(e.target.name === 'tema'){
      dispatch(themeAction(e.target.value))
      localStorage.setItem('theme', e.target.value)
    }else if(e.target.name === 'notificaciones'){
      OneSignal.init({ appId: '4c5fa167-1317-4dcd-93b1-3b58a8085e63' });
      OneSignal.showNativePrompt();
      OneSignal.setSubscription(e.target.value === 'true' ? true : false)
      dispatch(notificationAction(e.target.value))
    }else if(e.target.name === 'fuente'){
      dispatch(fontAction(e.target.value))
      localStorage.setItem('font', e.target.value)
    }
  }
  
  return (
    <div className='animate__animated animate__fadeInUp d-flex justify-content-center row'>
      <div className='col-12 mx-auto col-md-3 my-6 text-center'>
          <h1 className='text-center'>Configuración</h1>
          <img alt='configuracion' className='monochrome' width={300} src={configuracion}/>
      </div>
      <section className='d-flex justify-content-center row text-center'>
        <p>Configuraciones de tema, fuente y notificación</p>
        <form className='col-12 col-md-2 mx-auto m-4'>
          <label htmlFor='tema'>Tema:
            <select name='tema' onChange={listenChanges} defaultValue={tema}>
              <option value='claro'>Claro</option>
              <option value='oscuro'>Oscuro</option>
              <option value='lectura'>Lectura</option>
            </select>
          </label>
          <label htmlFor='notificaciones'>Notificaciones:
            <select name='notificaciones' onChange={listenChanges} defaultValue={notification}>
              <option value='true'>Activadas</option>
              <option value='false'>Desactivadas</option>
            </select>
          </label>
          <label htmlFor='fuente'>Fuente:
            <select name='fuente' onChange={listenChanges} defaultValue={font}>
              <option value='peque'>Pequeña</option>
              <option value='normal'>Normal</option>
              <option value='grande'>Grande</option>
            </select>
          </label>
          <small className='mt-4'><i>Las notificaciones deben estar habilitadas por el navegador primero, si se bloquean, borre los datos de navegación y actívelas desde las configuraciones de su navegador.</i></small>
        </form>
      </section>
    </div>
  )
}
/*<button onClick={()=>{OneSignal.setSubscription(false)}}>Set false suscription</button>
  <button onClick={()=>{OneSignal.setSubscription(true)}}>Set true suscription</button>
  <button onClick={()=>{OneSignal.getSubscription((res)=>{console.log(res)})}}>Query subscription</button> */