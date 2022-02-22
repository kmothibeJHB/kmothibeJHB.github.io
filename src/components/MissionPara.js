import React from 'react';
import { RiVipDiamondFill} from 'react-icons/ri';

function MissionPara(props){
    return (
        <>
        {/* slide in paragraphs on section load */}
        <div className="mission">
        <span><RiVipDiamondFill/></span>
        <p className='quote'>{props.quote}</p>
            <p className="mission_para">{props.info}</p>
        </div>
        </>
    )
};

export default MissionPara;