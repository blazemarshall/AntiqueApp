import './AntiqueTable.css'
import {v4 as uuidv4} from 'uuid';
import { Link, useNavigate } from 'react-router-dom';
import { deleteAntique } from '../../utils/api';
import {useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import TableCommands from './TableCommands';
export default function AntiqueTable({antiques}){

//------------imports-group----------------------

    const ref= useRef();
const navigate = useNavigate()
const [deleteErr,setDeleteErr] = useState(null);

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
     className={"tableRow"}   >
           <td>
            <div
        className='table-btns-container'>

            <button className='table-btns-container-button delete-btn' onClick={()=>deleteAntiqueHandler(name)}>delete</button>
            <button className='table-btns-container-button edit-btn' 
            onClick={()=>navigate(`/antiques/${id}/edit`)}
            >Edit</button>
            </div>
        </td>
        <td>{id}</td>
        <td>{quantity}</td>
        <td className='nameTd'>{name}</td>
        <td>{category}</td>
        <td>{value}</td>
        <td>{material}</td>
        <td>{color}</td>
        <td>{style}</td>
        <td>{brand}</td>
        <td>{model}</td>
        <td>{timePeriod}</td>
        <td>{condition}</td>
        <td>{origin}</td>
        <td>{purpose}</td>
        <td>{owner}</td>
        <td>{history}</td>
        <td>{size}</td>
        <td>{comment}</td>
        <td>{id}</td>
        <td>
            <div
        className='table-btns-container'>

            <button className='table-btns-container-button delete-btn' onClick={()=>deleteAntiqueHandler(name)}>delete</button>
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
        <div className={"table-container"}>
           <table className={"table"} ref={ref}> 
            <thead className={'table-head'}>
                <tr className={'tableRow'}>
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
    <TableCommands handlePrint={handlePrint}/>
        </div>
    )
}