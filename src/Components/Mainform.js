import React from 'react'
import Photos from './Photos'

const Mainform = ({handleSubmit, query, handleChange, loading, photos}) => {
    return (
        <main>
        <div className='main-head'>
            <form className='search-box' onSubmit={handleSubmit}>
            <input
            type='search'
            value={query}
            onChange={handleChange}
            >
            </input>
            </form>
        </div>
        <div className='main-head'>
            {loading && (<span> loading...</span>)}
            </div> 
        <div className='photos-list'>
            {photos.map(photo => (
                <Photos key={photo.id} url={photo.urls.thumb} />
                ))}
        </div>
        </main>
    )
}

export default Mainform
