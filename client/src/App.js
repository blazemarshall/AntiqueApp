import React,{useEffect, useState} from 'react'
import { BrowserRouter as Router} from "react-router-dom"
import './App.css';
import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";
import { listAntiques } from './utils/api';
// import {useReactToPrint} from 'react-to-print'
import RoutePaths from './components/Routes/RoutePaths';
import ErrorAlert from './components/commonFiles/ErrorAlert';

export default function App() {
//--------state---------------------------------------------
const [antiquesError,setAntiquesError]= useState([])
const [antiques,setAntiques]= useState([])


//--------------------------------------------------
useEffect(()=>{
  function loadAntiques(){
    const ac = new AbortController();
    setAntiquesError(null);
    listAntiques(ac.signal)
     .then(setAntiques)
     .catch(setAntiquesError)
      return () => ac.abort()}
      loadAntiques();
    },[]
)

//------------------search-Functions---------------------

const [searchClicked,setSearchClicked] = useState(false);

function handleSearchClick(){
  setSearchClicked(!searchClicked)
}
//----------------------------------------------------



  //    instrumental to file downloads
  // console.log(JSON.stringify(antiques,null,2),"antiques from db")

//--------------render--------------------------------------
  return (
    <div className={"app-container"}>
      <ErrorAlert err={antiquesError} />
    <Router>

    <div>
      <Header
      handleSearchClick={handleSearchClick}
      />
      {/* {searchClicked && <SearchFunction antiques={antiques}/>} */}
      <div className='content-wrapper'>
        <RoutePaths antiques={antiques} searchClicked={searchClicked}/>
      </div>
      {/* <Footer /> */}
    </div>
    </Router>
    </div>
  );
}

   