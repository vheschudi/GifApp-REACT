import React from 'react'

export const GifItem = ({title, url}) => {
  return (
    <>
    <div className="effect-card">
        <img className="card" src={url} alt={title} />
        <h5>{title}</h5>

    </div>
    
    </>
  )
}
