import './AntiqueTable.css';
import './TableCommands/TableCommands.css';
import {v4 as uuidv4} from 'uuid';
import { Link, useNavigate } from 'react-router-dom';
import { deleteAntique } from '../../utils/api';
import {useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import NameLink from '../commonFiles/Buttons/NameLink';
import TableCommands from './TableCommands/TableCommands';
import AllAntiquesTable from './Tables/AllAntiquesTable';


export default function AntiqueTable({antiques,searchClicked,SearchAntiques}){

//------------imports-group----------------------

    const ref= useRef();
const navigate = useNavigate()
const [deleteErr,setDeleteErr] = useState(null);
const [searchParams,setSearchParams] = useState("");
const [categorySelect,setCategorySelect] = useState('all')
//----------Searches-through-table--------------
// function searchForAntique(searchParams){}

//-----------deletes-single-antique-------------
async function deleteAntiqueHandler(antiqueName){
    try{
        let ac = new AbortController();
        if(window.confirm("Are you sure you want to delete?")){
            await deleteAntique(antiqueName,ac.signal)
            // .then(navigate("/antiques"))
            .then(window.location.reload(false))
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

//   ---------------select Handler------------------
const selectHandler = (e)=>{
    setCategorySelect(e.target.value)
}

//----------antique-list-mapped-to-table--------
const antiquesList =antiques?.map((antique,index)=>{
    const {id,quantity,name,category,value,material,color,size,style,brand,model,timePeriod,condition,origin,purpose,owner,history,comment,sellPrice,purchasePrice} = antique; 
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
        <td className='table-detail'>{purchasePrice}</td>
        <td className='table-detail'>{sellPrice}</td>
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
    
    <div className='table-btns-container'>
            <button className='table-btns-container-button delete-btn' onClick={()=>deleteAntiqueHandler(name)}>Delete</button>
            <button className='table-btns-container-button edit-btn' onClick={()=>navigate(`/antiques/${id}/edit-antique`)}>Edit</button>
            </div>
        </td>
    </tr>)
}
    )
// ----------------BookList map----------------------
const books = antiques.filter((antique)=> antique.category === "books")
const bookList =books?.map((antique,index)=>{
    const {id,sellPrice,purchasePrice,author,publisher,printed,genre,type,quantity,name,category,edition,value,material,color,size,style,brand,model,timePeriod,condition,origin,purpose,owner,history,comment} = antique; 
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
        <td className='table-detail'>{author}</td>
        <td className='table-detail'>{publisher}</td>
        <td className='table-detail'>{printed}</td>
        <td className='table-detail'>{edition}</td>
        <td className='table-detail'>{genre}</td>
        <td className='table-detail'>{type}</td>
        <td className='table-detail'>{category}</td>
        <td className='table-detail'>{value}</td>
        <td className='table-detail'>{sellPrice}</td>
        <td className='table-detail'>{purchasePrice}</td>
        <td className='table-detail'>{condition}</td>
        <td className='table-detail'>{origin}</td>
        <td className='table-detail'>{owner}</td>
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
    // ----------------Furniture List map----------------------
const furniture = antiques.filter((antique)=> antique.category === "furniture")
const furnitureList =furniture?.map((antique,index)=>{
    const {id,sellPrice,purchasePrice,author,publisher,printed,genre,type,quantity,name,category,value,material,color,size,style,brand,model,timePeriod,condition,origin,purpose,owner,history,comment} = antique; 
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
        <td className='table-detail'>{purchasePrice}</td>
        <td className='table-detail'>{sellPrice}</td>
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

console.log(categorySelect,"cat select")
//---------------render-------------------------------
    
    return(
    <div className='page-container'>
      
        
        <TableCommands handlePrint={handlePrint}
                       antiques={antiques}
                       searchClicked={searchClicked}
                       searchParams={searchParams}
                       SearchAntiques={SearchAntiques}
                       />
<div className='row category-select-table-container'>

    <label className='col category-select-label-table' htmlFor='categorySelector-table'>Choose a table to display : </label>
    <select className='col category-select-table' id='categorySelector-table' onChange={selectHandler}>
        <option value="all">All items</option>
        <option value="furniture">Furniture</option>
        <option value='books'>Books</option>
    </select>
</div>

   {categorySelect === "all"  &&  <AllAntiquesTable antiquesList={antiquesList} ref={ref} />}
   

     { categorySelect==='furniture' &&  <div className={"table-container-furniture"}>
            <h1 className='table-title-h1'>Furniture</h1>
           <table className={"table"} ref={ref}> 
            <thead className={'table-head'}>
                <tr className={'table-head-row tableRow'}>
                    <th>Actions</th>
                    <th>Id</th>
                    <th>Quantity</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Value</th>
                    <th>Purchase Price</th>
                    <th>Sell Price</th>
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
                    {furnitureList}

                </tbody>
                </table>
        </div>}

      {categorySelect==="books" &&  <div className={"table-container-books"}>
            <h1 className='table-title-h1'>Books</h1>
           <table className={"table"} ref={ref}> 
            <thead className={'table-head'}>
                <tr className={'table-head-row tableRow'}>
                <th>Actions</th>
                    <th>Id</th>
                    <th>Quantity</th>
                    <th>Name/Title</th>
                    <th>Author</th>
                    <th>Publisher</th>
                    <th>Printed</th>
                    <th>Edition</th>
                    <th>Genre</th>
                    <th>Type</th>
                    <th>Category</th>
                    <th>Value</th>
                    <th>Sell Price </th>
                    <th>Purchase Price</th>
                    <th>Condition</th>
                    <th>Origin</th>
                    <th>Owner</th>
                    <th>Comment</th>
                    <th>Id</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody className={'table-body'}>
                    {bookList}

                </tbody>
                </table>
            </div>}

        </div>
    )
}