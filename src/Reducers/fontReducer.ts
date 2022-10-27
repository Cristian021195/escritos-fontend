import { types } from "../Types/types"

const init = {
    font: localStorage.getItem('font') || 'normal'
}
export const fontReducer = (state = init, action:any) => {
    switch (action.type) {
        case(types.TINNY_FONT):{
            return {
                ...action.payload
            }
        }
        case(types.MEDIUM_FONT):{
            return {
                ...action.payload
            }
        }
        case(types.BIG_FONT):{
            return {
                ...action.payload
            }
        }
        default:
            return state
    }
}
