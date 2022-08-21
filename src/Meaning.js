import React from "react"

function Meaning (props) {
  console.log(props.meaning.definitions)
    if (props.meaning) {
        return (
          <div className="Meanings">
            <h3 className="noun">{props.meaning.partOfSpeech}</h3>
            {props.meaning.definitions.map((definition, index) => {
              console.log(definition)
              return (
                <div key={index}>
                  <p>▷ {definition.definition}</p>
                  <p className="example"><em> {definition.example}</em></p>
                  
                </div>
              );
            })}
          </div>
        );
      } else {
        return null;
      }
 }
export default Meaning