import React, { FormEvent, ReactEventHandler, useState } from 'react'
import { DataURL } from '../Helpers/DataURL';

export const Nuevo = () => {
    const [cargando, setCargando] = useState(false)
    const [texto, setTexto] = useState('');
    const enviar = (e:any) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = JSON.stringify(Object.fromEntries(formData))
        setCargando(true)

        fetch(`${DataURL.public}/nuevo`, {method:'POST', body:data, headers:{'Content-Type': 'application/json'}})
        .then(res=>res.json())
        .then(res=>{
            if(res.data.affectedRows > 0){
                alert('Se cargó correctamente')
                e.target.reset();
            }else{
                alert('Hubo inconveniente al cargar escrito')
            }
        })
        .catch(err=>alert('Ocurrio un error inesperado'+err))
        .finally(()=>setCargando(false))
                
    }
  return (
    <div className='animate__animated animate__fadeInUp d-flex justify-content-center row'>
      <div className='col-12 mx-auto col-md-3 my-6 text-center'>
          <h1 className='text-center'>Nuevo escrito</h1>
      </div>
      <section className=''>
        <form className='col-12 col-md-4 mx-auto m-4' onSubmit={(e)=>{enviar(e)}}>
          <label htmlFor='titulo'>Titulo:
            <input name='titulo' type='text' placeholder='Titulo' required minLength={5}></input>
          </label>
          <label htmlFor='autor'>Autor:
            <input name='autor' type='text' placeholder='Nombre del autor' required minLength={5}></input>
          </label>
          <label htmlFor='contacto'>Contacto:
            <input name='contacto' type='text' placeholder='Website o mail' required minLength={5}></input>
          </label>
          
          <label htmlFor='escrito'>Escrito:</label>
          <textarea name="escrito" rows={10} required minLength={5} maxLength={1024} onChange={(e)=>{setTexto(e.target.value)}}></textarea>
          <label htmlFor='contra'>Contraseña:
            <input name='contra' type='password' required minLength={5}></input>
          </label>
          <div className='text-center mt-4'>
            <button type='submit' className='leaf text-center' disabled={cargando}>Enviar</button>
          </div>
          <div className='mt-4 d-flex justify-content-evenly'>
            <strong>Cantidad de letras: {texto.length} / 1024</strong>
          </div>
        </form>
      </section>
    </div>
  )
}
