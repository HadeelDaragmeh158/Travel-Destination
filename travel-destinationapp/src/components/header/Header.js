import './header.css';
import { Link } from 'react-router-dom';
function Header(props) {
    return (
        <>
        <div  className = 'header'>
            <h1 className='logo'>Travel Destination</h1>

           <nav className='header-right'>
            <Link to='/'> Home
            </Link>

            <Link to='/city/id' > Tours
            </Link>
            </nav>
            </div>
        </>
    );
}
export default Header;