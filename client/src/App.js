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
import SearchAntique from './components/SearchAntique/SearchAntique';
import {useReactToPrint} from 'react-to-print'

export default function App() {
  const [antiquesError,setAntiquesError]= useState([])
  const [antiques,setAntiques]= useState([])
  const ref = useRef()


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
  //    instrumental to file downloads
  console.log(JSON.stringify(antiques,null,2),"antiques from db")
  return (
    <div className={"app-container"}>
    <Router>

    <div>
      <Header />
      <div className='content-wrapper'>
      <Routes >
        <Route exact path="/" element={<AntiqueTable antiques={antiques} />} />
        <Route exact path="/antiques/add-antique" element={<AddAntique />} />
        <Route exact path="/antiques/search-antique" element={<SearchAntique />} />
        <Route exact path='/antiques/:id/edit-antique' element={<EditAntique />} />
        <Route exact path="/antiques" element={<AntiqueTable antiques={antiques} />} />
        {/* <Route path='/antiques/:id' element={<SingleAntique />} /> */}
        <Route exact path="*" element={<NotFound  />} />
      </Routes>
      </div>
      {/* <Footer /> */}
    </div>
    </Router>
    </div>
  );
}

   