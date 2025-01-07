import './AllStyle.css'
import image_1 from '../Images/sakura-image7.jpg'
import image_2 from '../Images/sakura-image8.jpg'

function About(){
    return(
        <div className='About'>
            <img src={image_1} alt="sakura" />
            <h1>It's <br />
            sakura <br />
            time
            </h1>
            <div id='hr-line'></div>
            <h2>Join Us and discover Japan</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit Facilis,<br />minima molestiae molestias, iure expedita ullam. Accusantium,<br />voluptate quo possimus nam, alias asperiores ducimus nemo<br />ipsa delectus enim? Sed molestiae et possimus, voluptatibus.<br />Odio quos labore laboriosam? Lorem ipsum dolor sit amet.<br />Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <img src={image_2} alt="sakura2" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit,<br />Eligendi fuga cupiditate soluta libero natus ad possimus<br />cum iusto quis perspiciatis magni Lorem, ipsum labores.<br />Lorem ipsum dolor ammet, consectetur Facere, corporis.<br />Lorem ipsum dolor sit amet consectetur adipisicing elit Molestiae, laboriosam!</p>
        </div>
    )
}
export default About