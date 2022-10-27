import {useEffect, useState} from 'react'

/*interface IDataFetchCustom {
    data: IStateFetch
}
*/
interface IStateFetch {
    data:any,
    errors:any,
    loading:boolean
}


export const useFetch = (url:string, timeout = 3000) => {
    const [state, setState] = useState<IStateFetch>({data:{data:[]}, errors:null, loading:true})
    useEffect(() => {
        fetch(url)
        .then(res=>res.json())
        .then(res=>{setState({...state, data: res, loading:false});})
        .catch(err=>{
            setState({...state, errors:'¡Error de conexion! '+err, loading:false})
        })
        return () => {
            setState({data:{data:[]}, errors:null, loading:true}); // This worked for me
        };
    }, [url])
    return state;
}

export const useFetchAlt = (url:string, timeout = 3000) => {
    const [state, setState] = useState<IStateFetch>({data:[], errors:null, loading:true})
    useEffect(() => {
        fetch(url)
        .then(res=>res.json())
        .then(res=>{setState({...state, data: res, loading:false});})
        .catch(err=>{
            setState({...state, errors:'¡Error de conexion! '+err, loading:false})
        })

        return () => {
            setState({data:{data:[]}, errors:null, loading:true}); // This worked for me
        };

    }, [url])
    return state;
}

/*

import React, {useEffect, useState} from 'react'

export const useFetch = (url, timeout = 3000) => {
    console.log('se llamo useFetch')
    const [state, setState] = useState({data:[], errors:null, loading:true})
    useEffect(() => {
        fetch(url)
        .then(res=>res.json())
        .then(res=>{setState({...state, data: res, loading:false});})
        .catch(err=>{
            setState({...state, loading:false})
        })
    }, [url])
    return state;
}


*/