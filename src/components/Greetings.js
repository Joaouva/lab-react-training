import React from 'react'

function Greetings (props) {

    function GreetingLanguage(props){
    if(props.lang === "de"){
           return "Hallo"
       }else if(props.lang === "en"){
           return "Hello"
       }else if(props.lang === "es"){
           return "Hola"
       }else if(props.lang === "fr"){
           return "Bonjour"
       }
       }
       return(
           <div id="iteration2">
               <p>{GreetingLanguage(props)} {props.children}</p>
           </div>
       )
}


export default Greetings;