import { BiSend } from 'react-icons/bi';

function Contact() {
    return <>
    <div className="contact">
    <h4>Contact Us</h4>
    <form>
        <input type='text' placeholder="enter name"></input>
        <input type='email' placeholder="enter email"></input>
        <textarea placeholder="type your message"></textarea>
        <button type='submit' class='btn btn-secondary btn-lg'>Send</button>

    </form>
    </div>
    </>
}

export default Contact;