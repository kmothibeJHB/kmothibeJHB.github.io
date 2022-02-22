import React from 'react';

function Who(props){
    return (
    <>
    <p>{props.paragraph}</p>
    
    </>)
}

const addWho  = (info) => {
    const { mission } = info;

    return (
        <Who paragraph={mission}/>
    )
}

export default addWho;
