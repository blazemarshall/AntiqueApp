import './Header.css';
import { Link } from 'react-router-dom';
import HeadNavBar from './NavBar/HeadNavBar';
export default function Header({handlePrint}){
    return (
        <div className={'header-container'}>
            <div>

            <h1 className='header-title'>Dr. K's Treasure Bay</h1>
            <HeadNavBar handlePrint={handlePrint} />

            </div>
            </div>
    )
}