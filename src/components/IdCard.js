import React from 'react';

const IdCard = props => {
    return (
        <div>
            <div id="iteration1">
            <img src={props.picture} alt="image"></img>
            <div>
            <ul>
                <li>lastname: {props.lastname}</li>
                <li>firstname: {props.firstname}</li>
                <li>gender: {props.gender}</li>
                <li>height: {props.height}</li>
                <li>birth: {props.birth}</li>
            </ul>
            </div>
            
            </div>
        </div>
        
    )
}


export default IdCard;