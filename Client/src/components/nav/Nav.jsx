import styles from './Nav.module.css'
import SearchBar from '../searchbar/SearchBar';
import { Link, NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png';

export default function Nav({ onSearch }) {
    const location = useLocation();
    return (
        <nav className={styles.nav} >
             <div className={styles.logoContainer}>
             <img src= {logo} className={styles.logo} alt="Rick and Morty Logo"/>
             </div>
            <div className={styles.links}>
              <NavLink to="/home" className={styles.links2}>Home</NavLink>
                <NavLink to="/favorites" className={styles.links2}>Favourites</NavLink>
                <NavLink to="/about" className={styles.links2}>About</NavLink>
            </div>
            
                {location.pathname === '/home' || location.pathname === '/favorites' ? (
                    <SearchBar onSearch={onSearch} />
                ) : null}
            
        </nav>
    );
}