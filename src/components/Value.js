function Value(props){
    return <>
        <div className="value">
            <img src={props.img} alt='image'></img>
            <div className="paras">
            {props.info.map(m => {
                return <p>{m}</p>
            })}
            </div>
        </div>
    </>
}

// const addValue  = (info) => {
//     const { mission, img } = info;

//     return (
//         <Value mission={mission} img={img}/>
//     )
// }

export default Value;