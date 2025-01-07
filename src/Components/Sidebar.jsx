import './Sidebar.css'
import logo_1 from '../Images/instagram-logo.png'
import logo_2 from '../Images/twitter-logo.png'
import logo_3 from '../Images/facebook-logo.png'

function Sidebar(){
    return(
        <div className='Sidebar'>
             <h1>TIME</h1><h1>DISCOVER</h1>
             <a href="https://www.instagram.com/"><img src={logo_1} alt="instagram" id='logo1' className='logos'/></a>
             <a href="https://x.com/"><img src={logo_2} alt="twitter" id='logo2' className='logos'/></a>
             <a href="https://www.facebook.com/"><img src={logo_3} alt="facebook" id='logo3' className='logos'/></a>
        </div>
    )
}
export default Sidebar