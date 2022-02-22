import { FaTwitter,FaLinkedin,FaYoutube,FaFacebookSquare } from 'react-icons/fa';



function Connect() {
    return <>
        <div className="social">
            <a href='#' className='twitter'><FaTwitter/></a>
            <a href='#' className='facebook'><FaFacebookSquare/></a>
            <a href='#' className='linkedin'><FaLinkedin/></a>
            <a href='#' className='youtube'><FaYoutube/></a>
        </div>
        <div className='sign_up'>
            <p>stay updated by email :</p>
        <input type='text' placeholder='email'></input>
        <button class="btn btn-primary">Sign Up</button>

        </div>
    
    </>
}

export default Connect;