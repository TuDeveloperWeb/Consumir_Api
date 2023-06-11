
const apiKey = 'djuPhAZuuQPnBv7EPfQ4hfj314hbeTwX';

const giphApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        api_key : apiKey
    }
})


const getImage = async() => {
    try {
        const {data} = (await giphApi.get('/random')).data
        const {url} = data.images.original

        const img = document.createElement('img');
        img.src = url

        document.body.append(img);


    } catch (error) {
        console.log('Error en la peticion ',error);
        throw error
    }

}


getImage();