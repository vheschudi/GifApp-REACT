import React from 'react'
import { useState } from 'react'

export const AddCategory = ({ addCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = ({ target }) => {
        
        setInputValue(target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault(); /* evita que se resetee el input */

        if (inputValue.trim().length < 1) return; /* valida que este recibiendo un valor */

        addCategory(inputValue); /* Esta función la recibe del componente padre y permite actualizar el estrado de aquel */

        setInputValue(''); /* vacía */

    }

    return (
        <form className='d-flex' onSubmit={(e) => handleSubmit(e)}>
            <input
                className="form-control me-2"
                type="text"
                placeholder='Buscar gif'
                value={inputValue}
                onChange={(e) => handleInputChange(e)}

            />
        </form>
    )
}
