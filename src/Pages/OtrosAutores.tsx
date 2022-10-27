import React, { useEffect, useState } from 'react'
import { CustomLoader } from '../Components/CustomLoader';
import { Escrito } from '../Components/Escrito'
import { useFetchAlt } from '../Hooks/useFetch';

interface IEscrito {
  key?:number,
  id_escrito:number,
  fecha:string,
  autor:string,
  contacto:string,
  titulo:string
}
interface IResEscrito {
  content:string,
  poet:{name:string, url:string},
  title:string,
}

export const OtrosAutores = () => {
  //const {data,errors,loading} =  useFetchAlt('https://www.poemist.com/api/v1/randompoems');
  const [state, setState] = useState({loading:true,errors:false,data:[]});
  useEffect(()=>{
    fetch('https://www.poemist.com/api/v1/randompoems').then(res=>res.json()).then(data=>{
      setState({loading:false,errors:false,data})
    }).catch(err=>{
      setState({loading:false,errors:true,data:[]})
    })
  },[])
  return (
    <div className='animate__animated animate__fadeInUp'>
      <h1 className='text-center my-6'>Otros Autores</h1>
      <section className='d-flex justify-content-center row p-4'>
        {state.loading === true ? <CustomLoader/> : state.data.length === 0 && <h1 className='text-center my-6'>¡Sin poemas cargados!</h1>}
        {state.errors === true && <h1 className='text-center my-6'>¡Sin datos!</h1>}
        {state.data?.map((res:IResEscrito, res_i:number)=><Escrito 
          key={res_i} 
          id_escrito={res_i}
          escrito={res.content}
          fecha={'Sin fecha'}
          autor={res.poet.name}
          contacto={res.poet.url}
          titulo={res.title}/>)}        
      </section>
    </div>
  )
}

/*

<section className='d-flex justify-content-center row p-4'>
        {loading === true ? <CustomLoader/> : data.length === 0 && <h1 className='text-center my-6'>¡Sin datos!</h1>}
        {errors === true && <h1 className='text-center my-6'>¡Sin datos!</h1>}
        {data?.map((res:IResEscrito, res_i:number)=><Escrito 
          key={res_i} 
          id_escrito={res_i}
          escrito={res.content}
          fecha={'Sin fecha'}
          autor={res.poet.name}
          contacto={res.poet.url}
          titulo={res.title}/>)}
        
      </section>

*/
