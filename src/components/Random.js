import React from 'react';

function Random (props) {

    function getRandomNumber(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
      }
      
      return (
          <div id="iteration3">
              Random value between {props.min} and {props.max} =&gt; {getRandomNumber(props.min, props.max)}
          </div>
      )
}

export default Random;