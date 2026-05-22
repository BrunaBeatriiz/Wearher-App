const apiKey = import.meta.env.VITE_API_KEY;


const apiPrevisao = async (city) => {

  let res;

  try{
    const busca = await fetch(  `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`);

   res = await busca.json();
   console.log(res);
   return res; 
   
  }catch(error){
    console.log(`Erro na requisição da api: ${error}`)
  }
}

export default apiPrevisao;


apiPrevisao();

