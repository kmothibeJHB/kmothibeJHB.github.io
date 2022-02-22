import React from 'react';
import data_info from './data';
import Connect from './Connect';


function Footer(){
    return (
        <>
        <div className='bottom'>
        <div className='conclusion'>
            <p>{data_info.conclusion}</p>
        </div>
        <div className='connect'>
            <Connect/>

        </div>
        </div>
        <footer>
        <p>(012) 345 6789</p>
        <p>info@mandlaradebefoundation.org</p>
        <p className='footer'>Mandla Radebe Foundation &copy; Copyright Reserved 2022
        </p>
        </footer>
        </>

    )
}

export default Footer;