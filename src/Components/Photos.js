import React from 'react'

const Photos = ({url}) => {
    return (
        <article className='photo-card'>
            <figure>
                <img src={url}
                       alt='Photo'>
                </img>
            </figure>
        </article>
        
    )
}

export default Photos
