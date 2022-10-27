import { types } from "../Types/types"

const init = {
    theme: localStorage.getItem('theme') || 'claro'
}
export const themeReducer = (state = init, action:any) => {
    switch (action.type) {
        case(types.CLARO):{
            return {
                ...action.payload
            }
        }
        case(types.OSCURO):{
            return {
                ...action.payload
            }
        }
        case(types.LECTURA):{
            return {
                ...action.payload
            }
        }
        default:
            return state
    }
}
