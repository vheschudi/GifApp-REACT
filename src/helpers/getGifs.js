export const getGif = async (category) => {

    const API_KEY = 'VBQW3xcNG6zYYc3LyvVD4mfXO2WUkQyO';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=${10}&offset=0&rating=g&lang=en`

    const response = await fetch(url);

    const {data} = await response.json();

    const gifs = data.map(img => (
        {
            id: img.id,
            title: img.title,
            url: img.images.original.url
        }
        
    ))

    return gifs;
}