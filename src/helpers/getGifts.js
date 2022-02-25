export const getGifs = async (category) => {
    const apiKey = 'whGhYP64TqZ0m89ZLHYCzi8xntnHdTG2'
    const limit = 10
    const url = `https://api.giphy.com/v1/gifs/search?limit=${limit}&q=${encodeURI(category)}&api_key=${apiKey}`

    const resp = await fetch(url);
    const {
        data
    } = await resp.json();
    const gifs = data.map(img => {
        // Parseamos data para tener solo lo que queremos
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    // Modificamos el estado inicial de images que era un arreglo vacio
    return gifs
}