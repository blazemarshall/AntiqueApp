import React,{useEffect, useState,useRef} from 'react'
import {Link, Route, Routes, BrowserRouter as Router} from "react-router-dom"
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AntiqueTable from './components/ATable/AntiqueTable';
import { listAntiques } from './utils/api';
import AddAntique from './components/NewAntique/AddAntique';
import NotFound from './components//NotFound'
import EditAntique from './components/EditAntique/EditAntique';
import {useReactToPrint} from 'react-to-print'
import SearchFunction from './components/ATable/SearchFunction';
import SingleAntique from './components/SingleAntique/SingleAntique';

export default function App() {
//--------state---------------------------------------------
const [antiquesError,setAntiquesError]= useState([])
const [antiques,setAntiques]= useState([])

const ref = useRef()

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
    <Router>

    <div>
      <Header
      handleSearchClick={handleSearchClick}
      />
      {/* {searchClicked && <SearchFunction antiques={antiques}/>} */}
      <div className='content-wrapper'>
      <Routes >
        <Route exact path="/" element={<AntiqueTable 
                                          searchClicked={searchClicked}
                                          antiques={antiques}
                                          />} />
        <Route exact path="/antiques/add-antique" element={<AddAntique />} />
        <Route exact path='/antiques/:id/edit-antique' element={<EditAntique />} />
        <Route exact path="/antiques" element={<AntiqueTable antiques={antiques} searchClicked={searchClicked} />} />
        <Route path='/antiques/:id' element={<SingleAntique />} />
        <Route exact path="*" element={<NotFound  />} />
      </Routes>
      </div>
      {/* <Footer /> */}
    </div>
    </Router>
    </div>
  );
}

   