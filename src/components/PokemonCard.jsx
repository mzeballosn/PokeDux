import './pockemonCard.css'


const PokemonCard = ({ pockemon }) => {
  const cover = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png'
  return (
    <div className='container-card'>
      <div className='cover-img'>
          <img src={cover} className='imgs'/>
      </div>
      <div className='info'>
         <span> {pockemon.name}</span> 
      </div>        
     
    </div>
  )
}

export default PokemonCard
