import React, { useState } from 'react'

export const AddCategory = ( {setCategories} ) => {

    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(value.length > 2){
            setCategories(arr => [value, ...arr])
        }

    }

    const handleSetValue = (e) => {
        setValue( e.target.value );
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleSetValue}  />
            </form>
        </div>
    )
}
