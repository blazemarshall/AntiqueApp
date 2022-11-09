import './Header.css';
import { Link } from 'react-router-dom';
import HeadNavBar from './NavBar/HeadNavBar';
import { useEffect } from 'react';
export default function Header({handlePrint,handleSearchClick,}){
    
    return (
        <div className={'header-container'}>
            <div className='header-title-container'>

            <h1 className='header-title'>Dr. K's Treasure Bay</h1>
            <HeadNavBar handlePrint={handlePrint} 
                        handleSearchClick={handleSearchClick}
                        // searchClicked={searchClicked}
                        // setSearchClicked={setSearchClicked}
                        />

            </div>
            </div>
    )
}