import SearchFunction from "../Search/SearchFunction";

export default function TableCommands({handlePrint,searchParams,searchClicked,SearchAntiques,antiques}){
    return(
        <div className="tableCommands-container">
               {searchClicked && <SearchFunction
               antiques={antiques}
               SearchAntiques={SearchAntiques}
               searchParams={searchParams}/>}

               <button onClick={handlePrint} className='tableCommands-btn'>Print Full Table</button>
        </div>
    )
}