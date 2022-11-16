import React from "react";
import {Link} from 'react-router-dom'
import NameLink from "../../commonFiles/Buttons/NameLink";
export default function SearchResultItem({antique}){
return (<tbody className="search-tbody">
        <tr className="search-tr-body">
        <td className="search-td"> {antique.id} </td>
        <td className="search-td"><NameLink link={`/antiques/${antique.id}`}>{antique.name}</NameLink></td>
        <td className="search-td"> {antique.quantity} </td>
        <td className="search-td"> {antique.category} </td>
        <td className="search-td"> {antique.author} </td>
        <td className="search-td"> {antique.printed} </td>
        <td className="search-td"> {antique.genre} </td>
        <td className="search-td"> {antique.edition} </td>
        <td className="search-td"> {antique.publisher} </td>
        <td className="search-td"> {antique.type} </td>
        <td className="search-td"> {antique.value} </td>
        <td className="search-td"> {antique.purchasePrice} </td>
        <td className="search-td"> {antique.sellPrice} </td>
        <td className="search-td"> {antique.material} </td>
        <td className="search-td"> {antique.color} </td>
        <td className="search-td"> {antique.style} </td>
        <td className="search-td"> {antique.brand} </td>
        <td className="search-td"> {antique.model} </td>
        <td className="search-td"> {antique.timePeriod} </td>
        <td className="search-td"> {antique.condition} </td>
        <td className="search-td"> {antique.origin} </td>
        <td className="search-td"> {antique.purpose} </td>
        <td className="search-td"> {antique.owner} </td>
        <td className="search-td"> {antique.history} </td>
        <td className="search-td"> {antique.size} </td>
        <td className="search-td"> {antique.comment} </td>
        </tr>
</tbody>
    
)
}