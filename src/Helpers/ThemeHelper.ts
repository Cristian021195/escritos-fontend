export const ThemeHelper = (theme:string, font:string)=>{
    const $themeColor = document.getElementById('theme-color');
    const $html = document.querySelector('html');
    $html?.removeAttribute('class');
    $html?.classList.add(theme)

    if(font === 'peque'){
        //document.body.style.zoom = '85%';
    }
    else if(font === 'normal'){
        //document.body.style.zoom = '100%';
    }
    else if(font === 'grande'){
        //document.body.style.zoom = '115%';
    }

    if(theme === 'claro'){
        $themeColor?.setAttribute('content', '#e0e0e0');
    }else if(theme === 'oscuro'){
        $themeColor?.setAttribute('content', '#242424');
    }else if(theme === 'lectura'){
        $themeColor?.setAttribute('content', '#eddbc9');
    }
}


/*
import { types } from "../Types/types"

const $themeColor = document.getElementById('theme-color');

export const themeAction = (value) => {
    
    if(value === 'claro'){
        $themeColor.setAttribute('content', '#e0e0e0');
        return {
            type: types.CLARO,
            payload:{
                theme: 'claro'
            }
        }
    }else if(value === 'oscuro'){
        $themeColor.setAttribute('content', '#242424');
        return {
            type: types.OSCURO,
            payload:{
                theme: 'oscuro'
            }
        }
    }else if(value === 'lectura'){
        $themeColor.setAttribute('content', '#eddbc9');
        return {
            type: types.LECTURA,
            payload:{
                theme: 'lectura'
            }
        }
    }
}
*/