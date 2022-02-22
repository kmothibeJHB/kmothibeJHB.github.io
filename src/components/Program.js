import { FaStarHalfAlt } from 'react-icons/fa';

function Program(props) {
    return (
    <>
    <div className="program_card">
        <FaStarHalfAlt className='star'/>
        <div className="card_info">
            <p>{props.program}</p>
            <ul>
            {props.points.map(point => {
                return <li>{point}</li>
            })}
            </ul>
        </div>
    
    </div>
    </>)
}

const addProgram = (info) => {
    const { program, points, image } = info
    return (
        <Program program={program} points={points} image={image}/>
    )
}

export default addProgram;