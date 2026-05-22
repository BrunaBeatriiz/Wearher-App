const CardWeather = ({ weather, dark, previsao }) => {

  if (!weather) return null;

  let clima = weather?.weather?.[0]?.main;
  let icon = weather?.weather?.[0]?.icon;


  let previsaoDias = previsao?.list?.filter(item => 
    item.dt_txt?.includes("12:00:00")
  )
  console.log("resultado 12",previsaoDias);


  return (
    <div className={`mt-6 flex flex-col justify-center items-center transition-all duration-300 ${dark ? "text-white" : "text-slate-800"}`}>

      <h2 className={`text-4xl ${dark ? "text-white" : "text-blue-900"} `}>{weather?.name} 
        <span className="text-xs">
            , {weather?.sys?.country}
        </span>
      </h2>

      <div className="flex justify-center items-center gap-2 mt-2">
        <h3 className="text-5xl font-semibold">{Math.round(weather?.main?.temp)}
          <span className="text-lg align-top">
            °C
          </span>

        </h3>


        <img
          className={`size-20 mx-auto ${clima === "Rain" ? "animate-bounce" : clima === "Clouds" ? "animate-float" : "animate-pulse"}`}
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="icon clima" />
      </div>
      <p className={`capitalize tracking-wide mb-4 ${dark ? "text-slate-300" : "text-slate-600"}`}>
        {weather?.weather?.[0]?.description}
      </p>

      <div className="grid grid-cols-2 gap-3 mt-1 w-full max-w-[260px]">

        <div className={`rounded-xl p-2 text-center backdrop-blur-md ${dark ? "bg-slate-800/40" : "bg-white/30"}`}>
          <p className=" font-semibold">{Math.round(weather?.main?.temp_min)}°
          </p>
          <p className={`text-xs ${dark ? "text-slate-300" : "text-gray-600"}`}>Min</p>
        </div>

        <div className={`rounded-xl p-2 text-center backdrop-blur-md ${dark ? "bg-slate-800/40" : "bg-white/30"}`}>
          <p className=" font-semibold">{Math.round(weather?.main?.temp_max)}°
          </p>
          <p className={`text-xs ${dark ? "text-slate-300" : "text-gray-600"}`}>Max</p>
        </div>

        <div className={`rounded-xl p-2 text-center backdrop-blur-md ${dark ? "bg-slate-800/40" : "bg-white/30"}`}>

          <p className="text-sm font-semibold"> {Math.round(weather?.main?.feels_like)}°
          </p>
          <p className={`text-xs ${dark ? "text-slate-300" : "text-gray-600"}`}>Sensação</p>
        </div>

        <div className={`rounded-xl p-2 text-center backdrop-blur-md ${dark ? "bg-slate-800/40" : "bg-white/30"}`}>
          <p className="text-sm font-semibold">{Math.round(weather?.main?.humidity)}%
          </p>
          <p className={`text-xs ${dark ? "text-slate-300" : "text-gray-600"}`}>Umidade</p>
        </div>

      </div>

      <div className={`w-[80%] mt-4  rounded-xl px-4 py-2 backdrop-blur-md text-center ${dark ? "bg-slate-800/40" : "bg-white/30"}
        `}>
        <p className="text-sm font-semibold">🌬️ {weather?.wind?.speed} m/s</p>
      </div>


      <div className="grid grid-cols-2 gap-3 w-full max-w-[260px] mt-4">

        <div className={` rounded-xl p-2 backdrop-blur-md text-center ${dark ? "bg-slate-800/40" : "bg-white/30"}
        `}>

          <p className="text-lg">
            🌅
          </p>

          <p>
            {new Date(weather?.sys?.sunrise * 1000).toLocaleTimeString("pt-BR", {
              hour:"2-digit",
              minute: "2-digit"
            })}
          </p>

          <p className={`text-xs ${dark ? "text-slate-300" : "text-slate-600"}`}>
            Nascer
          </p>

        </div>


        <div className={` rounded-xl p-2 backdrop-blur-md text-center ${dark ? "bg-slate-800/40" : "bg-white/30"}
        `}>

          <p className="text-lg">
            🌇
          </p>

          <p>
            {new Date(weather?.sys?.sunset * 1000).toLocaleTimeString("pt-BR", {
              hour:"2-digit",
              minute: "2-digit"
            })}
          </p>

          <p className={`text-xs ${dark ? "text-slate-300" : "text-slate-600"}`}>
            Pôr do sol
          </p>

        </div>

      </div>




      <div className="flex gap-2 mt-6 overflow-x-auto">
        {previsaoDias?.slice(0,5).map((item, index) => (

          <div
          key={index} className={`
          w-full 
          rounded-xl py-2 px-1 text-center backdrop-blur-md ${dark ? "bg-slate-800/40" : "bg-white/20"} transition-all duration-300 hover:-translate-y-1`}>

           
           <p className="text-xs font-semibold">{
              new Date(item.dt_txt).toLocaleDateString("pt-BR",{
                weekday:"short"
              })}</p>


           <img 
           className="w-8 mx-auto"
            src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`} alt="icon previsão do tempo" />

            <p className="text-[10px] uppercase">{Math.round(item?.main?.temp_min)}° / {Math.round(item?.main?.temp_max)}°</p>


             
          </div>
        ))}
      </div>




    </div>
  )
}

export default CardWeather;




// ?. Serve pra evitar erro ao acessar algo que pode não existir
