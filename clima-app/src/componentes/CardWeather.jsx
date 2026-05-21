const CardWeather = ({ weather }) => {

  if(!weather) return null;

  const clima = weather?.weather?.[0]?.main;
  const icon = weather.weather?.[0]?.icon;


  return (
    <div>
      
    </div>
  )
}

export default CardWeather;

// ?. Serve pra evitar erro ao acessar algo que pode não existir