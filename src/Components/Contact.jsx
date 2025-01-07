import './AllStyle.css';
import image_10 from '../Images/sakura-image17.jpg'
import image_11 from '../Images/sakura-image18.jpg'
import image_12 from '../Images/sakura-image14.jpg'

function Contact() {
    return (
        <div className='Contact'>
            <img src={image_10} alt="sakura10" />
            <img src={image_11} alt="sakura11" />
            <form action="https://formspree.io/f/xanygqad" method="POST">
                <img src={image_12} alt="sakura12" />
                <h1>Contact Us.</h1>
                <h1>Full Name :-</h1>
                <input type="text" placeholder='Enter your name' name='name' required id='input-1'/>
                <h1>Email :-</h1>
                <input type="email" placeholder='Enter your email id' name='email' required id='input-2'/>
                <h1>Message :-</h1>
                <input type="text" name='message' required id='input-3'/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Contact;
