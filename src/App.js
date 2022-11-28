import imageRickMorty from './img/rick-morty.png';
import './App.css';
import { useState } from 'react';

function App() {


  const [characters, setCharacters ] = useState([]);


  

  const reqApi = async ()=>{
    const resp = await fetch('https://rickandmortyapi.com/api/character')
    const { results } = await resp.json()
    setCharacters((results)=>results);
    console.log('--',characters);
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Rick & Morty</h1>
        <img src={imageRickMorty} alt='Rick & Morty' className='img-home'/>
      
        <button onClick={reqApi} className='btn-search'>Buscar Personajes</button>
      </header>
    </div>
  );
}

export default App;
