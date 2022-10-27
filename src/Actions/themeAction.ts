import { types } from "../Types/types"

export const themeAction = (value) => {
    
    if(value === 'claro'){
        return {
            type: types.CLARO,
            payload:{
                theme: 'claro'
            }
        }
    }else if(value === 'oscuro'){
        return {
            type: types.OSCURO,
            payload:{
                theme: 'oscuro'
            }
        }
    }else if(value === 'lectura'){
        return {
            type: types.LECTURA,
            payload:{
                theme: 'lectura'
            }
        }
    }
}