


const apiKey = 'djuPhAZuuQPnBv7EPfQ4hfj314hbeTwX';

const giphApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        api_key : apiKey
    }
})


giphApi.get('/random')
    .then( resp => { 
        console.log(resp);
        const {data} = resp.data;
        const {url} = data.images.original;

        const img = document.createElement('img');
        img.src = url

        document.body.append(img);

    } )

export default giphApi;