import React from 'react'
import { CustomLoader } from '../Components/CustomLoader';
import { Escrito } from '../Components/Escrito'
import { DataURL } from '../Helpers/DataURL';
import { useFetch } from '../Hooks/useFetch'

export const Escritos = () => {
  const {data,errors,loading} = useFetch(`${DataURL.local}/escritos`);
  return (//d-flex justify-content-center row p-4
    <div className='animate__animated animate__fadeInUp'>
      <h1 className='text-center my-6'>Mis Escritos</h1>
      <section className='row d-flex justify-content-center'>
        {loading === true ? <CustomLoader/> : data.data.length === 0 && <h1 className='text-center my-6'>¡Sin datos!</h1>}
        {errors === true && <p className='text-center'>Cargando..</p>}
        {data.data === undefined ? <p className='text-center'>Cargando..</p> :
         data.data.map((res:any, res_i:number)=><Escrito titulo={res.titulo} key={res_i} id_escrito={res.id_escrito} escrito={res.escrito} fecha={res.fecha} autor={res.autor} contacto={res.contacto}/>)}
      </section>
    </div>
  )
}