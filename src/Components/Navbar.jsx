import './Navbar.css'
import {Link} from 'react-router-dom'

function Navbar(){
    return(
        <div className='navbar-main'>
            <ul>
                <li><Link to={"/"} className='nav-link'>About</Link></li>
                <li><Link to={"/Expedition"} className='nav-link'>Expeditions</Link></li>
                <li><Link to={"/Countries"} className='nav-link'>Countries</Link></li>
                <li><Link to={"/Contact"} className='nav-link'>Contact Us</Link></li>  
                <li><button id='btn-1'>Register</button></li>
            </ul>
        </div>
    )
}
export default Navbar