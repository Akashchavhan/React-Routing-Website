import './AllStyle.css'
import image_3 from '../Images/sakura-image9.jpg'
import image_4 from '../Images/sakura-image10.jpg'

function Expedition(){
    return(
        <div className='Expedition'>
          <img src={image_3} alt="sakura3" />
          <img src={image_4} alt="sakura4" />
          <h1>Expeditions</h1>
          <h2>Unknown</h2>
          <div id='hr-line2'></div>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, quibusdam animi assumenda repellat <br /> explicabo distinctio fugit aut architecto sed! Laborum eum, ea odit consequatur <br /> expedita iure sequi quas voluptatum suscipit!</p>
        </div>
    )
}
export default Expedition