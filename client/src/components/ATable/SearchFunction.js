import './AntiqueTable.css'
import React,{useState} from 'react'
import SearchResults from './SearchResults'
import Scroll from './Scroll'


export default function SearchFunction({antiques}){
    const [searchField,setSearchField] = useState('')

const handleSearchChange = e => {
  setSearchField(e.target.value)
}

const filteredAntiques = antiques?.filter((antique)=>{
    return (antique.name.toLowerCase().includes(searchField.toLowerCase()) 
    )
})


    return(
        <div className="searchFunction-container">Search
            <input 
            placeholder="Type in name"
            type="search"
            onChange={handleSearchChange}
            aria-label='search for antique input box'
            />
        <Scroll>
            <SearchResults filteredAntiques= {filteredAntiques} />
        </Scroll>
        </div>
    )
}