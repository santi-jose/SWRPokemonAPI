import { useState } from 'react'
import PokemonLogo from '/images/pokemon-1.png'

import useRequest from '../src/hooks/useRequest.jsx'
import Pokemon from '../src/components/Pokemon.jsx'
import AudioPlayer from './components/AudioPlayer.jsx'

function App() {
  const { isLoading, data, error } = useRequest('/pokemon');

  const DisplayPokemon = () => {
    if(data) { // if we received data
      return( 
        <div className="row">
          {
            // <h2>{result.name}</h2>
            data.results.map((pokemon) => {
              return (
                <>
                  <Pokemon key={[pokemon.name]} pokemon={pokemon} />
                </>
              );
            })
          }
        </div>
      );
    }
  }

  const ErrorHandling = () => {
    if(isLoading){ // if we are loading
      return <div>Loading Pokemon data...</div>;
    }

    if(error){ // if we have an error
      return <div>{error}: There was an error with getting data</div>;
    }
  }

  return (
    <>
      <img src={PokemonLogo} class="pokemon-logo"></img>

      <AudioPlayer />

      {/* 
        if we have data : render DisplayPokemon
        else: render ErrorHandling  
      */}
      {data ? <DisplayPokemon /> : <ErrorHandling />}
    </>
  )
}

export default App
