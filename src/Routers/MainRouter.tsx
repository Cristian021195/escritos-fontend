import React from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ThemeHelper } from '../Helpers/ThemeHelper'

interface IEstado {
  theme:string,
  font:string
}

interface IProps{
  children?: React.ReactNode
}

export const MainRouter = ({children}:any) => {
  const {theme} = useSelector((state:any)=>state.theme);
  const {font} = useSelector((state:any)=>state.font);
  ThemeHelper(theme, font);
  return (
    <main className={`m-3 ${theme}`}>
      <BrowserRouter>
          {children}
      </BrowserRouter>
    </main>
  )
}

/*



*/
