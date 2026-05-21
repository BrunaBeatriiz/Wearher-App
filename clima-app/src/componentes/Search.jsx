import { useState } from "react";

function Search ({resultadoPesquisa,resultadoPrevisao}) {


  const [cidade, setCidade] = useState("");

  const handleSearch = () => {
    resultadoPesquisa(cidade);
    resultadoPrevisao(cidade);
    
  }

  return(
    <div className="flex items-center gap-2 bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl px-3 py-2">

      <input type="text" name="" id=""
      className="w-full bg-transparent outline-none text-slate-700 placeholder:text-slate-500"
      placeholder="Buscar cidade..."
      value={cidade}
      onChange={(event) => setCidade(event.target.value)}
       />
      <button type="submit"
      className="transition-all duration-300 hover:scale-110 active:scale-90"
      onClick={handleSearch}>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
      </button>
      
    </div>
  )
}

export default Search;