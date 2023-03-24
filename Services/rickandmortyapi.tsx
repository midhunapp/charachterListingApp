import axios from 'axios';
const baseUrl = 'https://rickandmortyapi.com/api';
export const fetchCharacters = async (pageNumber:number) => {
 try{
 
  const url = `${baseUrl}/character?page=${pageNumber}`;
  //alert(url);
  const response = await axios.get(url);

  //alert(JSON.stringify(response));
  //alert(JSON.stringify(response.data.results));
  if (response.status === 200) {
   return{
     data:response.data.results,
     error:null,
     status:200
   }
  } else {
    return{
      data:[],
      error:"An error has occurred",
      status:response.status
    }
  }
    
 }
 catch(ex){
  return{
    data:[],
    error:"An error has occurred",
    status:401
  }
 }
};


export const searchCharacters = async (name:string) => {
  try{
  
   const url = `${baseUrl}/character/?name=${name}&status=alive`;
   //alert(url);
   const response = await axios.get(url);
 
   //alert(JSON.stringify(response));
   //alert(JSON.stringify(response.data.results));
   if (response.status === 200) {
    return{
      data:response.data.results,
      error:null,
      status:200
    }
   } else {
     return{
       data:[],
       error:"An error has occurred",
       status:response.status
     }
   }
     
  }
  catch(ex){
    return{
      data:[],
      error:"An error has occurred",
      status:401
    }
  }
 };

