import './navbar.css';
import logo from '../../images/FHLogo.png.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <div className="NavbarContainer">
            <Link to="/"><img src={logo} alt="FH" id="logo" /></Link>
            <div className="Navlinks">
                <ul className='links'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Jobs">Jobs</Link></li>
                    <li><Link to="/Settings">Settings</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;