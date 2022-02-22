import React from 'react';
import addPerson from './Person';
import data_info from './data'
import addWho from './Who';

function About(){
    return (<>
        <div className='main_about'>
            <h3 className='about_title'>About us</h3>
            <div className='who'>
                <h4>Who we are</h4>
                {data_info.who.map(addWho)}
            </div>
            <h4 className='executive'>executive management</h4>
            <div className='about'>
                {data_info.executive_management.map(addPerson)}
            </div>
        </div>
        </>)
}

export default About;