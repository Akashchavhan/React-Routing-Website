import './AllStyle.css'
import image_5 from '../Images/sakura-image11.jpg'
import image_6 from '../Images/sakura-image14.jpg'
import image_7 from '../Images/sakura-image13.png'
import image_8 from '../Images/sakura-image15.png'
import image_9 from '../Images/sakura-image16.png'

function Countries(){
    return(
        <div className='Countries'>
          <img src={image_5} alt="sakura5" />
          <img src={image_6} alt="sakura6" />
          <img src={image_7} alt="sakura7" />
          <img src={image_8} alt="sakura8" />
          <h1>Japan</h1>
          <h2>Country</h2>
          <h2>Known</h2>
          <h2>For Its</h2>
          <h2>Traditions.</h2>
          <div id='hr-line3'></div>
          <img src={image_9} alt="sakura9" />
          <div id='hr-line4'></div>
          <div id='hr-line5'></div>
        </div>
    )
}
export default Countries