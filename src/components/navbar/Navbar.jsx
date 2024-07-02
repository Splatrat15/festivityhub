import './navbar.css';

const Navbar = () => {
    return(
        <div className="NavbarContainer">
            <h1>
                Icon
            </h1>
            <div className="Navlinks">
                <ul className='links'>
                    <li>Home</li>
                    <li>Jobs</li>
                    <li>Settings</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;