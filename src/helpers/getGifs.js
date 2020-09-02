
export const getGifs = async( category )=>{
        
    const url = `https://api.giphy.com/v1/gifs/search?limit=10&q=${ encodeURI( category ) }&api_key=ymSWNp5AmhzOnHwDe9Ta2FcYKINzJleD`;
    const result = await fetch( url );
    const { data } = await result.json();      
    
    const gifs = data.map( img => {
    
        return {
            id: img.id,
            title: img.title,
            image: img.images.downsized.url
        }   
    });
    
    return gifs;
}