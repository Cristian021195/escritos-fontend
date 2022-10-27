import { types } from "../Types/types"

const init = {
    //notification: localStorage.getItem('notification') || 'desactivada'
    notification: localStorage.getItem('isPushNotificationsEnabled') === 'true' ? true : false
}
export const notificationReducer = (state = init, action:any) => {
    switch (action.type) {
        case(types.NOTIFICATION_ON):{
            return {
                ...action.payload
            }
        }
        case(types.NOTIFICATION_OFF):{
            return {
                ...action.payload
            }
        }
        default:
            return state
    }
}
