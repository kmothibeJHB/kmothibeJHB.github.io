import React from 'react';
import Mission from './Mission';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { BsChevronDoubleDown } from  'react-icons/bs';
import Value from './Value';
import data_info from './data';
import addProgram from './Program';

var docWidth = document.documentElement.offsetWidth;

[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);

function Home(){
    return (
        <>
    <div className='main'>
    <div className="boy_child">
    <h1>a boy child foundation</h1>
    <a href="/about"><FaLongArrowAltRight className='more_icon'/></a>
    </div>
    </div>
    <div>
        <div className='double_down'>
        <BsChevronDoubleDown />
        </div>
        <Mission/>
        <div className='double_down'>
        <BsChevronDoubleDown />
        </div>
        <div className="values">
            <h3>What we are</h3>
            <Value img={data_info.what_we_are.img} info={data_info.what_we_are.mission}/>
        </div>

        <div className='double_down'>
        <BsChevronDoubleDown />
        </div>
        <div className='program'>
    <h1 id="programmes">foundation program and way forward</h1>
    <div className='program_info'>
        {data_info.program_and_way_forward.map(addProgram)}
    </div>
    </div>
        
        
    </div>
    
        </>
    )
}

export default Home