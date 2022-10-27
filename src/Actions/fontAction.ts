import { types } from "../Types/types"

export const fontAction = (value:string) => {
    if(value === 'peque'){
        return {
            type: types.TINNY_FONT,
            payload:{
                font: 'peque'
            }
        }
    }else if(value === 'normal'){
        return {
            type: types.MEDIUM_FONT,
            payload:{
                font: 'normal'
            }
        }
    }else if(value === 'grande'){
        return {
            type: types.BIG_FONT,
            payload:{
                font: 'grande'
            }
        }
    }
}