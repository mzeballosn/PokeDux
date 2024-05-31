import Meta from 'antd/es/card/Meta'
import './pockemonCard.css'
import { Card } from 'antd'
import StartButton from './StartButton'
import { useDispatch } from 'react-redux'
import { setFavorite } from '../actions'




// eslint-disable-next-line react/prop-types
const PokemonCard = ({ name, image, types, id, favorite }) => {
  const dispatch = useDispatch()

  const typesString = types?.map(ele => ele.type.name).join(', ')

  const handleOnFavorite = () =>{
    dispatch(setFavorite({pockemonId: id}))
  }

  return (
    <Card  className='container-card'    
           title={name}
           cover={<img src={image} className='cover-img'/>}
           extra={<StartButton isFavorite={ favorite  }  onClick={handleOnFavorite} />}  
           >
          <Meta description={typesString} className='info'/>          
    </Card>
  )
}

export default PokemonCard


/*
const PokemonCard = ({ name,image, types }) => {
  const cover = image
  const typesString = types?.map(ele => ele.type.name).join(', ')
  return (
    <div className='container-card'>
      <div className='cover-img'>
          <img src={cover} className='imgs' alt={name}/>
      </div>
      <div className='info'>
         <span> {name}</span> 
         <Meta description={typesString}/>
      </div>        
     
    </div>
  )
}*/