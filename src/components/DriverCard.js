import React from 'react'
import Rating from './Rating'

const DriverCard = props => {
    return (
    <div>
            <div id="iteration7">
            <img src={props.img} alt="image"></img>
            <div>
                <h3>{props.name}</h3>
                <Rating>{props.rating}</Rating>
                <p>{props.car.model} {props.car.licensePlate}</p>
            </div>
            
            </div>
        </div>
    )
}






export default DriverCard;