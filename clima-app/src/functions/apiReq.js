const apiReq = async () => {

  let res;

  try{
    const busca = await fetch("");

   res = await busca.json();
   return res; 
   
  }catch(error){
    console.log(`Erro na requisição da api: ${error}`)
  }
}

