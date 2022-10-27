import React from 'react'

import { useParams } from 'react-router-dom';
import { SheetBottom } from './SheetBottom';
import { SheetTop } from './SheetTop';
import {useFetch} from '../Hooks/useFetch';
import {CustomLoader} from './CustomLoader';
import { DataURL } from '../Helpers/DataURL';
import moment from 'moment'
import 'moment/locale/es';

export const EscritoSingular = () => {
    const {id} = useParams();//data:[], errors:null, loading:true
    const {data, errors, loading} = useFetch(`${DataURL.public}/escritos/${id}`);
  return (
      <>
        {loading && <CustomLoader/>}
        {errors && <p>Error al cargar</p>}
        {data.data.length > 0 ? 
          <article className='text-center escrito escrito-singular col-md-4 col-12 bg-dark mx-auto my-15 p-2 animate__animated animate__fadeInUp w-50'>
            <SheetBottom/>
            <h1>{data.data[0].titulo}</h1>
            <p>{data.data[0].escrito}</p>
            <br/>
            <small className='m-2'>{moment(data.data[0].fecha).format('dddd Do MMMM YYYY hh:mm')}</small><br/>
            <small>Contacto: &nbsp;<a href={data.data[0].contacto} target='_blank' rel='noopener noreferrer'>{data.data[0].autor}</a></small>
            <SheetTop/>
          </article>
         :
         <div className='animate__animated animate__fadeInUp d-flex justify-content-center row'>
            <div className='col-12 mx-auto col-md-3 my-6 text-center'>
              <h1 className='text-center'>Sin datos</h1>
            </div>
          </div>
        }
        
      </>
  )
}
