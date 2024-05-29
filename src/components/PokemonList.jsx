import './style.css'
import PokemonCard from "./PokemonCard"



// eslint-disable-next-line react/prop-types
const PokemonList = ({ pockemons }) => {     
    let i = 0
  return (
    <div className='pockemonlist'>              
           {
                pockemons?.map( pockemon => 
                    <PokemonCard  key={pockemon.name} name={pockemon.name} image={pockemon.sprites.front_default}/>
                )
           } 
                    
    </div>
  )
}

export default PokemonList