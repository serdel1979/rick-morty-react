import React from 'react'

export const GridCharacters = ({characters}=[]) => {
  
 //{characters.length===0?<h1>cero</h1>:<h1>{characters.length}</h1>}   
    return (
    <div className='characters'>
        <h1>Personajes</h1>
        <span className='back-home'>Volver</span>
        <div className='container-characters'>
            {
                characters.map((character, index) => (
                     <div className='character-container' key={index}>
                         <p>{character.name}</p>
                         <img src={character.image} alt="personaje"/>
                     </div>
                ))
            }
        </div>
    </div>
  )
}
