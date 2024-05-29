import './pockemonCard.css'


const PokemonCard = ({ name,image }) => {
  const cover = image
  return (
    <div className='container-card'>
      <div className='cover-img'>
          <img src={cover} className='imgs' alt={name}/>
      </div>
      <div className='info'>
         <span> {name}</span> 
      </div>        
     
    </div>
  )
}

export default PokemonCard
