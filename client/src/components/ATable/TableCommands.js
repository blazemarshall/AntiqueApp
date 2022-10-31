import SearchFunction from "./SearchFunction";

export default function TableCommands({handlePrint,searchParams,searchClicked,SearchAntiques,antiques}){
    return(
        <div className="tableCommands-container">
               <button onClick={handlePrint} className='tableCommands-btn'>Print</button>
               {searchClicked && <SearchFunction
               antiques={antiques}
               SearchAntiques={SearchAntiques}
               searchParams={searchParams}/>}

        </div>
    )
}