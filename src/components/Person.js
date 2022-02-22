
function Person(props){
    return <>
        <div className="image">
            <img src={props.img} alt="name" className="image_img"></img>
            <div className="image_overlay">
                <div className="image_title">{props.fullName}</div>
                <p className="image_description">
                        {props.title}
                    </p>
            </div>
        </div>
    </>
}

const addPerson  = (info) => {
    const { fullName, title, image } = info;

    return (
        <Person fullName={fullName} title={title} img={image}/>
    )
}

export default addPerson;