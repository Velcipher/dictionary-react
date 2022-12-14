import React from "react";
import ResultPhotoes from "./ResultPhotoes";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

export default function WordResultText (props) {
    
   if (props.data) {
  
    return(
        
        <div className='text'>
            <section>
             <div className="wordHeader">   
            <h1>{props.data.word}</h1> <br/>
       <Phonetic phonetics={props.data.phonetics}/></div><br/>
      
       
       {props.data.meanings.map(function(meaning, index) { return (<div key={index}><Meaning meaning={meaning}/>
       </div>)} )
       }
       </section>
      
      

<ResultPhotoes photos={props.photos}/>

      </div>
    )
} else{
    return null;
  }}