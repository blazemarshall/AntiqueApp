import "./HeadNavBar.css";
// import "../../../index.css";
import React,{useState} from 'react'
import {Link,} from 'react-router-dom'
export default function HeadNavBar({handlePrint,handleSearchClick}){
    return (
    <div className='HeadNavBar-container'>
      <Link className="HeadNavBar-btn" to="/antiques">Home</Link>
      <Link to='/antiques/add-antique' className='HeadNavBar-btn'>Add Antique</Link>
      <button to='/antiques/search-antique'
      className='HeadNavBar-btn'
      onClick={()=>handleSearchClick()} >Search for Antique</button>
      {/* <button className="HeadNavBar-btn" onClick={""}>Download</button> */}
      {/* <button className="HeadNavBar-btn" onClick={""}>Upload</button> */}
    </div>)
}