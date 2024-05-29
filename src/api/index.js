import axios from 'axios'

 const getPokemon = () => {
  return axios          
    .get('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then((res) => res.data.results)
    .catch((err) => console.log(err))
};


const getPokemonDetails = (pockemon) =>{
  return axios
  .get(pockemon.url)
  .then(res => res.data)
  .catch(err => console.log(err)) 
}
export { getPokemon, getPokemonDetails }