import './Searcher.css'
import { MdSearch } from "react-icons/md";

const Searcher = () => {
  const handleSearch = (e) =>{    
    e.preventDefault()
    console.log('buscar elemento : ',document.getElementById('search').value)
  }
  return  (
    <>      
      <div className='search-wrapper'>     
        <input type='search' id='search' placeholder='Serarch pokemon' onChange={handleSearch}/> 
        <MdSearch  className='mdSearch' onClick={handleSearch} />
    </div>
    </>
  )
}

export default Searcher
