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
                         <div>
                            <img src={character.image} alt={character.name}/>
                         </div>
                         <div>
                            <h3>{character.name}</h3>
                            <h6>
                                {
                                    character.status==="Alive"?(
                                            <>
                                            <span className='alive'/>
                                            Alive
                                            </>
                                        ):(
                                            <>
                                                <span className='dead'/>
                                                Dead
                                            </>
                                        )
                                }
                            </h6>
                            <p className='text-grey'>
                                <span>Episodios: </span>
                            </p>
                         </div>
                     </div>
                ))
            }
        </div>
    </div>
  )
}
