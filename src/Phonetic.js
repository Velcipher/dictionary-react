import React from "react";

function Phonetic (props) {
    console.log(props.phonetics)
if (props.phonetics)
   {console.log('OK') 
   
    return (
        <div className="Phonetic">
            {props.phonetics.map(function(phonetic, index){return (
            <div key={index}>
                <a href={phonetic.audio} target='_blank' rel="noreferrer" >🔊  </a>
                {phonetic.text}</div>)
            })}
        </div>
    )}else {
        return null
    }
}

export default Phonetic