import MissionPara from "./MissionPara";
import data_info from "./data";

function Mission(){
    return (
        <>
        <div className="mission">
        <h1 className="mission_header">Our Mission</h1>
        <MissionPara info={data_info.about['missionE'].statement} quote={data_info.about['missionE'].quote}/>

        <MissionPara info={data_info.about['missionB'].statement} quote={data_info.about['missionB'].quote}/>
        </div>
        </>
    )
};


export default Mission;