import React, { useEffect, useState } from 'react';
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
import { MainRouter } from "./Routers/MainRouter";
import { PublicRouter } from "./Routers/PublicRouter";
import { Provider } from "react-redux";
import { store } from "./Store/store";
import 'animate.css';
import 'moment/locale/es';
import { TopAlert } from './Components/TopAlert';

function App() {
  const [netStat, setNetStat] = useState(navigator.onLine);
  useEffect(()=>{
    window.addEventListener('online', ()=>{
      setNetStat(true)
    })
    window.addEventListener('offline', ()=>{
      setNetStat(false)
    })
    return ()=>{
      window.removeEventListener('offline', ()=>{});
      window.removeEventListener('online', ()=>{});
    }
  }, [])
  return (
    <Provider store={store}>
        <TopAlert online={netStat} setNetStat={setNetStat}><h2>¡Sin conexion!</h2> - toque para cerrar -</TopAlert>
        <MainRouter>
          <>
            <Header/>
            <PublicRouter/>
          </>
        </MainRouter>
      <Footer/>
    </Provider>
  );//<Header/>
}

export default App
