import React, { useState } from 'react'
import PropTypes from 'prop-types'


const AddCategory = ({ setCategories }) => {

    // El estado del input es un string vacio (el texto que introducirá el usuario)
    const [inputValue, setInputValue] = useState('');

    const handleInputValue = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        // Previene que la página se recarge
        e.preventDefault()

        if (inputValue.trim().length > 2) {
            // Ejecuta la función de estado de GifExpertApp, cambiando las categorías
            setCategories(categories => [inputValue, ...categories])
            // Además modifica el estado del inputValue al original
            setInputValue('')
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    // En el onChange, se llama a handleInputValue y ejecuta la función de estado, teniendo así un nuevo value
                    value={inputValue}
                    // En el onChange cambiamos el estado (inputValue) a través de su propio método
                    onChange={handleInputValue} />
            </form>
        </>
    )
}

// Forzamos a introducir una property que sea una función
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory
