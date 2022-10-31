import './AntiqueTable.css'
import React,{useState} from 'react'
import SearchResults from './SearchResults'
import Scroll from './Scroll'


export default function SearchFunction({antiques}){
    console.log("antiques,SearchFunc",antiques)
    const [searchField,setSearchField] = useState('')

const handleSearchChange = e => {
  setSearchField(e.target.value)
}

const filteredAntiques = antiques?.filter((antique)=>{
    console.log(antique,"show me damnit")
    return (antique.name.toLowerCase().includes(searchField.toLowerCase()) 
    )
})

// function SearchResults(){
//     return (
       
//     )
// }


//  function SearchAntiques(searchQuery){
//   setAntiques()
  
//  }


    return(
        <div className="searchFunction-container">Search
            <input 
            // type="text" 
            placeholder="Type in name"
            // name="search"
            // id="search"
            type="search"
            onChange={handleSearchChange}
            // value={searchField}
            aria-label='search for antique input box'
            />
        {/* <Scroll> */}
            <SearchResults filteredAntiques= {filteredAntiques} />
        {/* </Scroll> */}
        </div>
    )
}