import './style.css'
import PokemonCard from "./PokemonCard"



// eslint-disable-next-line react/prop-types
const PokemonList = ({ pockemons }) => {     
  return (
    <div className='pockemonlist'>              
           {
                pockemons?.map( pockemon => 
                    <PokemonCard  key={pockemon.name} 
                                  name={pockemon.name} 
                                  image={pockemon.sprites.front_default}
                                  types={pockemon.types}
                                  id={pockemon.id}
                                  favorite={pockemon?.favorite}
                    />
                )
           } 
                    
    </div>
  )
}

export default PokemonList