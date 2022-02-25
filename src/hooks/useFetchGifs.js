import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifts";

export const useFetchGifs = (category) => {
    const [state, setstate] = useState({
        data: [],
        loading: true
    });

 
    // Ejecutamos getGifts una vez al renderizar la vista
    useEffect(() => {
        getGifs(category)
            .then(imgs => {
                setstate({
                    data: imgs,
                    loading: false
                })
            }) // Igual que -> .then(imgs => setImages(imgs))
    }, [category]) // Si la categoría cambia se volvería a renderizar
    // [] solo se dispara una vez

    return state
}