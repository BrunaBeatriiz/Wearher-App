

import Header from './componentes/Header'
import Search from './componentes/Search'
import CardWeather from './componentes/CardWeather';
import apiReq from './functions/apiReq.js'
import { useState } from 'react';
import './index.css'

function App() {
  const [weather, setWeather] = useState(null);
  const [dark, setDark] = useState(false);

  async function resultadoPesquisa(city) {

    const data = await apiReq(city);
    setWeather(data)
  }

  function darkMode () {
    setDark(!dark);
  }

  console.log("aqui e o ", weather);


  return (
    <div className={`min-h-screen flex flex-col transition-all duration-300 ${dark? "bg-slate-900 text-white" : "bg-gradient-to-br from-sky-50 via-blue-100 to-sky-200"}`}>

      <Header dark={dark} darkMode={darkMode}/>

      <div className='flex flex-col justify-center items-center flex-1'>

        <div className="w-[90%] max-w-sm min-h-[420px] p-6 
        bg-white/20 backdrop-blur-lg border border-white/30 rounded-3xl 
        shadow-blue-200/30
        transition-all duration-300
        hover:scale-105 
        hover:translate-y-2 hover:shadow-2xl opacity-0 animate-fadeIn">

          <Search resultadoPesquisa={resultadoPesquisa} />


          <CardWeather weather={weather} />
        </div>
      </div>
    </div>
  )
}

export default App
