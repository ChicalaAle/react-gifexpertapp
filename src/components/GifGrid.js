import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const {data:gifs, loading} = useFetchGifs(category);


    return (
        <div>
            <h3>{category}</h3>

            {loading && 'Loading...'}

            {
               gifs.map(gif => (
                    <GifGridItem key={gif.id} {...gif} />
                ))
            }
        </div>
    )
}
