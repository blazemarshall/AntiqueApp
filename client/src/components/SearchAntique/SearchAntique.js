import './SearchAntique.css'
export default function SearchAntique(){
    return (<div className="search-container" >
        <h3>Type in antique name to search : </h3>
        <form>
            <input 
            className='search-input'placeholder='Name'/>
            <button className='search-btn' onclick={''} >Search</button>

        </form>
        </div>)
}