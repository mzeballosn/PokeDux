import './App.css'
//import { connect } from 'react-redux'  // al usar hooks ya no se usa el connect
import { shallowEqual, useDispatch, useSelector } from 'react-redux' 
//import { setPockemons as setPockemonsActions } from './actions' // al usar hook ya no se renombra
//import { getPockemonsWithDetails, setPockemons } from './actions'
//import { getPockemonsWithDetails, setLoading} from './actions' // ya no lo usamos, usamos redux/toolkit 
import   PokemonList from './components/PokemonList'
import { useEffect } from 'react'
//import   {getPokemon, getPokemonDetails} from './api'
//import   {getPokemon} from './api' // ya no lo usamos, usamos redux/toolkit 
import   Searcher from './components/Searcher'
import { Spin } from 'antd'
import { fetchPockemonWithDetails } from './slices/dataSlice'

//function App({ pockemons, setPockemons }) {    // no se pasan los props al usar hooks
  //const [pockemons, setPockemons] = useState([]) // useState no se usar por tener Redux

function App(){    
  // Permite extraer la data del estado a traves de una funcion selectora pura
  // es equivalente a  mapStateToProps la diferencia radica en que el valor se guarda en una 
  // variable y no pasara por las props, el selector subscribe el componente al estado
  // por lo que sera llamado cada vez que se haga dispach a una accion asi se puede 
  // evaluar si el valor cambio para reenderizar el componente
  
  
  // anulo al estar usando  immutable
  //const pockemons = useSelector(state => state.pockemons) 
//  const loading = useSelector(state => state.loading)

  // uso de immutable
   //const pockemons = useSelector((state) => state.get('pockemons')).toJS()
   //dejo de usar immutable para usar redux/toolkit
   //const pockemons = useSelector((state) => state.getIn(['data','pockemons'],shallowEqual)).toJS() //shallowEqual comparación estricta y valores
   //const loading   = useSelector((state) => state.getIn(['iu','loading']))

   const pockemons = useSelector((state) => state.data.pockemons,shallowEqual)
   //const loading = useSelector((state) => state.iu.loading)
   const loading = useSelector((state)=> state.ui.loading)

  //dispatch retorna una ref del dispacher o funcion disparador del store de redux
  // esto es utilizado para disparar las acciones
  const dispatch = useDispatch()

  useEffect(()=>{  
    //dejamos de usar para implementar con redux toolkit
    /*
    const fetchPockemon = async ( ) => {      
      //dejamos de usar para implementar con redux toolkit
      //dispatch(setLoading(true)) // se maneja mejor si se controla la cantidad de items recibidos 
      //const result = await getPokemon()
      
      // Se dejo de utilizar para obtener el detalle o imagen del pockemon
      //dispatch(setPockemons(result))  
    
      // Se utilizo Pomise.All para encadenar las promesas y obtener la imagen cover del pokemon
      //const resultDetails = await Promise.all(result.map(pockemon => getPokemonDetails(pockemon)))
      //console.log(resultDetails)
      //dispatch(setPockemons(resultDetails))
           
      
      //dejamos de usar para implementar con redux toolkit
      //dispatch(getPockemonsWithDetails(result))
      //dispatch(setLoading(loading)) // se maneja mejor si se controla la cantidad de items recibidos  



    }  
    fetchPockemon()
    */
    
    dispatch(fetchPockemonWithDetails())
  },[])
   
  return (
    <div className='App'>      
      <img src='' />
      <Searcher />            
      {
        ///!pockemons?.length ? <Spin spinning='large'/> : <PokemonList pockemons={pockemons} />      
        loading ? <Spin spinning='large'/> : <PokemonList pockemons={pockemons} />      
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
