import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

    // Mi estado va a ser el arreglo de categorías
    const initCategory = ['Marvel']
    // useState devuelve el estado y una función que cambia el estado
    const [categories, setCategories] = useState(initCategory);
    // Tengo el estado categories y la función setCategories para modificar el estado
    // La función toma como entrada un callback con parámetro de entrada el estado.

    return (
        <>
            <h2>GifExpertApp</h2>
            {/* AddCategory toma la función de estado para modificarla en el onSubmit del input */}
            <AddCategory setCategories={setCategories} />
            <hr />
            <ol>
                {/* Generamos un GifGrid para cada categoría, si está cambia se vuelve a renderizar */}
                {categories.map(category =>
                    <GifGrid key={category} category={category} />
                )
                }
            </ol>
        </>
    )
}

export default GifExpertApp
