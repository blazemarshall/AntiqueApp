import './AntiqueTable.css';
import './TableCommands/TableCommands.css';
import {v4 as uuidv4} from 'uuid';
import { Link, useNavigate } from 'react-router-dom';
import { deleteAntique } from '../../utils/api';
import {useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import NameLink from '../commonFiles/Buttons/NameLink';
import TableCommands from './TableCommands/TableCommands';


export default function AntiqueTable({antiques,searchClicked,SearchAntiques}){

//------------imports-group----------------------

    const ref= useRef();
const navigate = useNavigate()
const [deleteErr,setDeleteErr] = useState(null);
const [searchParams,setSearchParams] = useState("");
//----------Searches-through-table--------------
// function searchForAntique(searchParams){}

//-----------deletes-single-antique-------------
async function deleteAntiqueHandler(antiqueName){
    try{
        let ac = new AbortController();
        if(window.confirm("Are you sure you want to delete?")){
            await deleteAntique(antiqueName,ac.signal)
            .then(navigate("/antiques"))
            .catch(console.log);
        }
    } catch (err){
        setDeleteErr(err)
    }
}
//----------------print-to-pdf-------------------

const handlePrint = useReactToPrint({
    content: ()=> ref.current,
  })


//----------antique-list-mapped-to-table--------
const antiquesList =antiques?.map((antique,index)=>{
    const {id,quantity,name,category,value,material,color,size,style,brand,model,timePeriod,condition,origin,purpose,owner,history,comment} = antique; 
    return(
        <tr
        key={uuidv4()}
     className={"table-body-row"}   >
           <td className='table-detail'>
            <div
        className='table-btns-container'>
            <button className='table-btns-container-button delete-btn' onClick={()=>deleteAntiqueHandler(name)}>Delete</button>
            <button className='table-btns-container-button edit-btn' 
            onClick={()=>navigate(`/antiques/${id}/edit-antique`)}
            >Edit</button>
            </div>
        </td>
        <td className='table-detail'>{id}</td>
        <td className='table-detail'>{quantity}</td>
        <td
         className='table-detail-name'><NameLink link={`/antiques/${id}`}>{name}</NameLink>
         </td>
        <td className='table-detail'>{category}</td>
        <td className='table-detail'>{value}</td>
        <td className='table-detail'>{material}</td>
        <td className='table-detail'>{color}</td>
        <td className='table-detail'>{style}</td>
        <td className='table-detail'>{brand}</td>
        <td className='table-detail'>{model}</td>
        <td className='table-detail'>{timePeriod}</td>
        <td className='table-detail'>{condition}</td>
        <td className='table-detail'>{origin}</td>
        <td className='table-detail'>{purpose}</td>
        <td className='table-detail'>{owner}</td>
        <td className='table-detail'>{history}</td>
        <td className='table-detail'>{size}</td>
        <td className='table-detail'>{comment}</td>
        <td className='table-detail'>{id}</td>
        <td className='table-detail'>
            <div
        className='table-btns-container'>

            <button className='table-btns-container-button delete-btn' onClick={()=>deleteAntiqueHandler(name)}>Delete</button>
            <button className='table-btns-container-button edit-btn' 
            onClick={()=>navigate(`/antiques/${id}/edit-antique`)}
            >Edit</button>
            </div>
        </td>
    </tr>)
}
    )


//---------------render-------------------------------
    
    return(
        
        <div className='page-container'>
        <TableCommands handlePrint={handlePrint}
                       antiques={antiques}
                       searchClicked={searchClicked}
                       searchParams={searchParams}
                       SearchAntiques={SearchAntiques}
                       />
        <div className={"table-container"}>
           <table className={"table"} ref={ref}> 
            <thead className={'table-head'}>
                <tr className={'table-head-row tableRow'}>
                    <th>Actions</th>
                    <th>Id</th>
                    <th>Quantity</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Value</th>
                    <th>Material</th>
                    <th>Color</th>
                    <th>Style</th>
                    <th>Brand</th>
                    <th>Model</th>
                    <th>Time Period</th>
                    <th>Condition</th>
                    <th>Origin</th>
                    <th>Purpose</th>
                    <th>Owner</th>
                    <th>History</th>
                    <th>Size</th>
                    <th>Comment</th>
                    <th>Id</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody className={'table-body'}>
                    {antiquesList}

                </tbody>
                </table>
           
    
    </div>
        </div>
    )
}