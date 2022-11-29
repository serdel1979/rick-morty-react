import React from 'react'

export const GridCharacters = ({characters, setCharacters}=[]) => {
  
    const reset = ()=>{
        setCharacters([]);
    }

    return (
    <div className='characters'>
        <h1>Personajes</h1>
        <span onClick={setCharacters} className='back-home'>Volver</span>
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
                                <span>{character.episode.length}</span>
                            </p>
                            <p>
                               <span className='text-grey'>Especie: </span>
                               <span>{character.species}</span> 
                            </p>
                         </div>
                     </div>
                ))
            }
        </div>
        <span  onClick={setCharacters}  className='back-home'>Volver</span>
    </div>
  )
}
