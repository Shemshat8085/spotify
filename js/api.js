const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '8a444e45e1msh5ae7689bc69b089p1649e2jsn9ab1d65e879b',
		'x-rapidapi-host': 'shazam.p.rapidapi.com'
	}
};


export class API{
    async getPopuler() {
              try {
      
      const response = await fetch('https://shazam.p.rapidapi.com/search?term=duman',options);

      const data=await response.json();

     const formattedData=data.tracks.hits.map((item)  => item.track);

     
     return formattedData;

              } catch (error) {
                alert('error');
              }
    }

    async getSearchMusics(query){
                  try {
             
     const res = await fetch(`https://shazam.p.rapidapi.com/search?term=${query}`,options);

         
     const data = await res.json();

      
    
     const formattedData=data.tracks.hits.map((item)  => item.track);


     return formattedData;
       
            } catch (error) {
              alert('error') ;    
            }
}

}