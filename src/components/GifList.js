import React from 'react';

export default function GifList({ gifs }) {

  const gifList = (gifs) => {
    return gifs.map(gif => {
      return (
        <li key={gif.id} className="gif">
          <img src={gif.images.original.url} alt={gif.title} />
        </li>
      )
    })
  }
  
  return (
    <ul className="gif-list" >
      {gifList(gifs)}
    </ul>
  );
}