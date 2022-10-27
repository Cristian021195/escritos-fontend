import { types } from "../Types/types"

export const notificationAction = (value:string) => {
    if(value === 'true'){
        return {
            type: types.NOTIFICATION_ON,
            payload:{
                notification: true
            }
        }
    }else if(value === 'false'){
        return {
            type: types.NOTIFICATION_OFF,
            payload:{
                notification: false
            }
        }
    }
}