import './App.css'
import { connect } from 'react-redux' 
import { setPockemons as setPockemonsActions } from './actions'
import   PokemonList from './components/PokemonList'
import { useEffect } from 'react'
import   getPokemon from './api'
import   Searcher from './components/Searcher'

function App({ pockemons, setPockemons }) {    
  //const [pockemons, setPockemons] = useState([])
  
  useEffect(()=>{  
    const fetchPockemon = async ( ) => {
      const result = await getPokemon()
      setPockemons(result)     
    }  
    fetchPockemon()
    
  },[])
   
  return (
    <div className='App'>      
      <img src='' />
      <Searcher />      
      {
        !pockemons.length ? (<h1>Loading</h1>) : 
          <PokemonList pockemons={pockemons} />      
      }
          
    </div>
  )
}
// mapStateToProps es una función que recibe el estado y retorna el objeto que 
// envía las propiedades o props de los componentes que se están conectando a Redux
const mapStateToProps = (state) => ({
  pockemons: state.pockemons
})
const mapDispatchToProps =(dispatch)=>({
  setPockemons: (value) => dispatch(setPockemonsActions(value))
})

export default connect(mapStateToProps,mapDispatchToProps)(App)
