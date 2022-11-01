import React from "react";

export default function SearchResultItem({antique}){
return (<tbody>
        <tr>
        <td> {antique.id} </td>
        <td> {antique.name} </td>
        <td> {antique.quantity} </td>
        <td> {antique.category} </td>
        <td> {antique.value} </td>
        <td> {antique.color} </td>
        <td> {antique.style} </td>
        <td> {antique.brand} </td>
        <td> {antique.model} </td>
        <td> {antique.timePeriod} </td>
        <td> {antique.condition} </td>
        <td> {antique.purpose} </td>
        <td> {antique.owner} </td>
        <td> {antique.history} </td>
        <td> {antique.size} </td>
        <td> {antique.comment} </td>
        </tr>
</tbody>
    
)
}