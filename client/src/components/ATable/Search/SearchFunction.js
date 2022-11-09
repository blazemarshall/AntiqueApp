import './Search.css'
import React,{useEffect, useState} from 'react'
import SearchResults from './SearchResults'
import Scroll from './Scroll'
import Select from './Select'


export default function SearchFunction({antiques}){
    const [searchField,setSearchField] = useState('')
    const [field,setField]=useState('name')

const handleSearchChange = e => {
  setSearchField(e.target.value)
}

useEffect(()=>{}
,[field])


const filteredAntiques = antiques?.filter((antique)=>{
    let antiqueField;

    if(field === "id"){antiqueField= antique.id
        return (antiqueField === (Number(searchField))
        )}
    if(field === 'category')return antique.category.toLowerCase().includes(searchField.toLowerCase())
    if(field === 'material')return antique.material.toLowerCase().includes(searchField.toLowerCase())
    if(field === 'style')return antique.style.toLowerCase().includes(searchField.toLowerCase())
    if(field === 'timePeriod')return antique.timePeriod.toLowerCase().includes(searchField.toLowerCase())
    if(field === 'condition')return antique.condition.toLowerCase().includes(searchField.toLowerCase())
    if(field === 'owner')return antique.owner.toLowerCase().includes(searchField.toLowerCase())
    if(field === 'brand')return antique.brand.toLowerCase().includes(searchField.toLowerCase())
    if(field === 'model')return antique.model.toLowerCase().includes(searchField.toLowerCase())
return antique.name.toLowerCase().includes(searchField.toLowerCase() )
})


    return(
        <div className="searchFunction-container">
            <Select field={field} setField={setField}/>
            <h5 className='search-h5'>Search</h5>
          
            {field === "id" &&         <input type="number" placeholder='Enter a number'      onChange={handleSearchChange} />}
            {field === "category" &&   <input type="search" placeholder='Enter a Category.'   onChange={handleSearchChange} />}
            {field === "material" &&   <input type="search" placeholder='Enter a Material'    onChange={handleSearchChange} />}
            {field === "style" &&      <input type="search" placeholder='Enter a Style'       onChange={handleSearchChange} />}
            {field === "timePeriod" && <input type="search" placeholder='Enter a Time Period' onChange={handleSearchChange} />}
            {field === "condition" &&  <input type="search" placeholder='Enter a Condition'   onChange={handleSearchChange} />}
            {field === "owner" &&      <input type="search" placeholder='Enter a Owner'       onChange={handleSearchChange} />}
            {field === "brand" &&      <input type="search" placeholder='Enter a Brand'       onChange={handleSearchChange} />}
            {field === "model" &&      <input type="search" placeholder='Enter a Model'       onChange={handleSearchChange} />}
            
            {field === "name" && <input 
            placeholder="Type in name"
            type="search"
            onChange={handleSearchChange}
            aria-label='search for antique input box'
            />}

            <h6 className="search-results-title">Search Results</h6>

        <Scroll>
            <SearchResults filteredAntiques= {filteredAntiques} />
        </Scroll>
        </div>
    )
}