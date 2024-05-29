import './App.css'
//import { connect } from 'react-redux'  // al usar hooks ya no se usa el connect
import { useDispatch, useSelector } from 'react-redux' 
//import { setPockemons as setPockemonsActions } from './actions' // al usar hook ya no se renombra
import { setPockemons } from './actions'
import   PokemonList from './components/PokemonList'
import { useEffect } from 'react'
import   getPokemon from './api'
import   Searcher from './components/Searcher'

//function App({ pockemons, setPockemons }) {    // no se pasan los props al usar hooks
  //const [pockemons, setPockemons] = useState([]) // useState no se usar por tener Redux

function App(){    
  // Permite extraer la data del estado a traves de una funcion selectora pura
  // es equivalente a  mapStateToProps la diferencia radica en que el valor se guarda en una 
  // variable y no pasara por las props, el selector subscribe el componente al estado
  // por lo que sera llamado cada vez que se haga dispach a una accion asi se puede 
  // evaluar si el valor cambio para reenderizar el componente
  const pockemons = useSelector(state => state.pockemons) 

  //dispatch retorna una ref del dispacher o funcion disparador del store de redux
  // esto es utilizado para disparar las acciones
  const dispatch = useDispatch();

  useEffect(()=>{  
    const fetchPockemon = async ( ) => {
      const result = await getPokemon()
      dispatch(setPockemons(result))
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
    // const mapStateToProps = (state) => ({ //dejamos de utilizar al usar hooks
    //  pockemons: state.pockemons
    // })
// mapDispatchToProps también es una funcion que recibe el dispacher de Redux
// y retorna un objeto que es mapeado a las props de los components pero con loa actios 
// creators establecidos
    //const mapDispatchToProps =(dispatch)=>({ //dejamos de utilizar al usar hooks
    //  setPockemons: (value) => dispatch(setPockemonsActions(value))
    //})

//export default connect(mapStateToProps,mapDispatchToProps)(App) // al user hooks ya no se requieren

export default App
