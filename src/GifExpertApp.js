import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const arr_categories = [''];

    const [categories, setCategories] = useState(arr_categories);

    return (
        <>
            <h1 className="animate__animated animate__bounce">GifExpertApp</h1>
            <AddCategory setCategories={setCategories} />
            
            <ol>
                {
                    categories.map(category => (
                        <GifGrid 
                        key={category}
                        category={category}
                        />
                    ))
                }
            </ol>
        </>
    )
}

export default GifExpertApp
