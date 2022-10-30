import "./HeadNavBar.css";
// import "../../../index.css";
import React from 'react'
import {Link} from 'react-router-dom'
export default function HeadNavBar({handlePrint}){
    return (
    <div className='HeadNavBar-container'>
      <Link className="HeadNavBar-btn" to="/antiques">Home</Link>
      <Link to='/antiques/add-antique' className='HeadNavBar-btn'>Add Antique</Link>
      <Link to='/antiques/search-antique' className='HeadNavBar-btn'>Search for Antique</Link>
      <button className="HeadNavBar-btn" onClick={handlePrint}>Print</button>
    </div>)
}