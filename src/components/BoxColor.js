import React from 'react'

function BoxColor (props) {

    const divStyle = {
        backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
        border: 1,
        margin: 10,
        height: 50,
    };

    return (
    
        <div style={divStyle} id="iteration3">
            <span>rgb{props.r},{props.g},{props.b}</span>
        </div>
    )
}

export default BoxColor;