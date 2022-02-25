import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs(category);
    return (
        <>
            <h3>{category}</h3>
            {loading && <p>Cargando...</p>}
            <div className='card-grid'>
                {images.map((img) =>
                    // Descomponemos img para pasarselo como props
                    (<GifGridItem key={img.id} {...img} />)
                )}
            </div>
        </>
    )
}

export default GifGrid
