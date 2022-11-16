import { useEffect, useState } from "react"
import { findAntique } from "../../utils/api"
import { useParams } from "react-router"


export default function SingleAntique({setAntiqueListPage}){
    const [ apiErrs,setApiErrs] = useState(null)
    const [antique,setAntique] = useState(null);
    const {id} = useParams();
useEffect(()=>{
    async function fetchAntique(){
        const ac = new AbortController();
        try{
            // setAntiqueListPage(false)
            setApiErrs(null);
            await findAntique(id,ac.signal).then(setAntique)
            console.log(antique,"single Antique antique",id)
        } catch(err){
            setApiErrs(err)
        }
            return ()=>{ac.abort()}
    }
    fetchAntique();
},[id])
    return(
<div className="single-antique-container">
    { antique?.category ==="furniture" && 
     <table className="table row">
              <thead className="table-head col ">
                    <tr className="table-head-row col">
                    <th className="single-antique-head-th">Id</th>
                    <th className="single-antique-head-th">Name</th>
                    <th className="single-antique-head-th">Quantity</th>
                    <th className="single-antique-head-th">Category</th>
                    <th className="single-antique-head-th">Value</th>
                    <th className="single-antique-head-th">Material</th>
                    <th className="single-antique-head-th">Color</th>
                    <th className="single-antique-head-th">Style</th>
                    <th className="single-antique-head-th">Brand</th>
                    <th className="single-antique-head-th">Model</th>
                    <th className="single-antique-head-th">Time_Period</th>
                    <th className="single-antique-head-th">Condition</th>
                    <th className="single-antique-head-th">Origin</th>
                    <th className="single-antique-head-th">Purpose</th>
                    <th className="single-antique-head-th">Owner</th>
                    <th className="single-antique-head-th">History</th>
                    <th className="single-antique-head-th">Size</th>
                    <th className="single-antique-head-th">Comment</th>
                    </tr>
                </thead>
                <tbody className="table-body col">
        <tr className="table-body-row col">
        <td className="table-detail single-antique-td"> <p>{antique?.id}</p></td>
        <td className="table-detail single-antique-td"> <p>{antique?.name}</p></td>
        <td className="table-detail single-antique-td"> <p>{antique?.quantity}</p></td>
        <td className="table-detail single-antique-td"> <p>{antique?.category}</p></td>
        <td className="table-detail single-antique-td"> <p>{antique?.value}</p></td>
        <td className="table-detail single-antique-td"> <p>{antique?.material}</p></td>
        <td className="table-detail single-antique-td"> <p>{antique?.color}</p></td>
        <td className="table-detail single-antique-td"> <p>{antique?.style}</p></td>
        <td className="table-detail single-antique-td"> <p>{antique?.brand}</p></td>
        <td className="table-detail single-antique-td"> <p>{antique?.model}</p></td>
        <td className="table-detail single-antique-td"> <p>{antique?.timePeriod}</p></td>
        <td className="table-detail single-antique-td"> <p>{antique?.condition}</p></td>
        <td className="table-detail single-antique-td"> <p>{antique?.origin}</p></td>
        <td className="table-detail single-antique-td"> <p>{antique?.purpose}</p></td>
        <td className="table-detail single-antique-td"> <p>{antique?.owner}</p></td>
        <td className="table-detail single-antique-td shortened"> {antique?.history} </td>
        <td className="table-detail single-antique-td"> {antique?.size} </td>
        <td className="table-detail single-antique-td"> {antique?.comment} </td>
        </tr>
        </tbody>
            </table>}

    { antique?.category ==="books" && 
         <table className="table row">
              <thead className="table-head col ">
                    <tr className="table-head-row col">
                    <th className="single-antique-head-th">Id</th>
                    <th className="single-antique-head-th">Name/Title</th>
                    <th className="single-antique-head-th">Quantity</th>
                    <th className="single-antique-head-th">Author</th>
                    <th className="single-antique-head-th">Publisher</th>
                    <th className="single-antique-head-th">Printed</th>
                    <th className="single-antique-head-th">Genre</th>
                    <th className="single-antique-head-th">Type</th>
                    <th className="single-antique-head-th">Category</th>
                    <th className="single-antique-head-th">Value</th>
                    <th className="single-antique-head-th">Sell Price</th>
                    <th className="single-antique-head-th">Purchase Price</th>
                    <th className="single-antique-head-th">Condition</th>
                    <th className="single-antique-head-th">Origin</th>
                    <th className="single-antique-head-th">Owner</th>
                    <th className="single-antique-head-th">Comment</th>
                    </tr>
                </thead>
                <tbody className="table-body col">
        <tr className="table-body-row col">
        <td className="table-detail single-antique-td"> <p>{antique?.id}</p></td>
        <td className="table-detail single-antique-td"> <p>{antique?.name}</p></td>
        <td className="table-detail single-antique-td"> <p>{antique?.quantity}</p></td>
        <td className="table-detail single-antique-td"> <p>{antique?.Author}</p></td>
        <td className="table-detail single-antique-td"> <p>{antique?.Publisher}</p></td>
        <td className="table-detail single-antique-td"> <p>{antique?.Printed}</p></td>
        <td className="table-detail single-antique-td"> <p>{antique?.Genre}</p></td>
        <td className="table-detail single-antique-td"> <p>{antique?.Type}</p></td>
        <td className="table-detail single-antique-td"> <p>{antique?.category}</p></td>
        <td className="table-detail single-antique-td"> <p>{antique?.value}</p></td>
        <td className="table-detail single-antique-td"> <p>{antique?.sellPrice}</p></td>
        <td className="table-detail single-antique-td"> <p>{antique?.purchasePrice}</p></td>
        <td className="table-detail single-antique-td"> <p>{antique?.condition}</p></td>
        <td className="table-detail single-antique-td"> <p>{antique?.origin}</p></td>
        <td className="table-detail single-antique-td"> <p>{antique?.owner}</p></td>
        <td className="table-detail single-antique-td"> {antique?.comment} </td>
        </tr>
        </tbody>
            </table>}
        </div>
    )
}