import SearchFunction from "../Search/SearchFunction";
import { CSSTransition } from 'react-transition-group';
import {  useRef } from "react";
import '../Search/Search.css'

export default function TableCommands({handlePrint,searchParams,searchClicked,SearchAntiques,antiques}){

    //used for css Transition
    const nodeRef=useRef();

    console.log(searchClicked,'searchClicek ')
    return(
        <div className="tableCommands-container">
<CSSTransition
 in={searchClicked}
//  appear={true}
 nodeRef={nodeRef}
 timeout={500}
 classNames='searchFunction-div'
 unmountOnExit
 >

<SearchFunction
        ref={nodeRef}
        antiques={antiques}
        SearchAntiques={SearchAntiques}
        searchParams={searchParams}/>
</CSSTransition>

               <button onClick={handlePrint} className='tableCommands-btn'>Print Full Table</button>
        </div>
    )
    // console.log(classNames)
}