

import Header from './componentes/Header'
import Search from './componentes/Search'
import CardWeather from './componentes/CardWeather';
import apiReq from './functions/apiReq.js'
import { useState } from 'react';
import './index.css'
import apiPrevisao from './functions/apiPrevisao.js';

function App() {
  const [weather, setWeather] = useState(null);
  const [dark, setDark] = useState(false);
  const [previsao, setPrevisao] = useState(null);

  async function resultadoPesquisa(city) {

    if(!city.trim()) return;
    const data = await apiReq(city);
    setWeather(data)
  }

  function darkMode () {
    setDark(!dark);
  }

  console.log("aqui e o ", weather);

  async function  resultadoPrevisao(city) {
    if(!city.trim()) return;


    const data = await apiPrevisao(city);

    setPrevisao(data);
  }

   console.log("aqui e o previsao ", previsao);


  return (
    <div className={`min-h-screen flex flex-col transition-all pb-10 duration-300  hover:shadow-blue-400/30 ${dark? "bg-slate-900 text-white" : "bg-gradient-to-br from-slate-100 via-sky-100 to-blue-200"}`}>

      <Header dark={dark} darkMode={darkMode}/>

      <div className='flex flex-col justify-center items-center flex-1'>

        <div className="w-[85%] max-w-sm min-h-[500px] p-6 
        bg-white/25 backdrop-blur-xl border border-white/40 rounded-[32px] 
        shadow-2xl shadow-sky-300/20 transform
        transition-all duration-300
        hover:scale-110  hover:-translate-y-2
        hover:shadow-sky-400/40
         animate-fadeIn">

          <Search resultadoPesquisa={resultadoPesquisa} resultadoPrevisao={resultadoPrevisao} />


          <CardWeather weather={weather} dark={dark} previsao={previsao}/>
        </div>
      </div>
    </div>
  )
}

export default App
