import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'



function ResultPhotoes (props){
    if (props.photos)
   { return (
    
<div className="row mb-2" id='photoes'>
{props.photos.map(function (photo, index) {
    return (
      <div className="card" key={index}>
    <a
                    href={photo.urls.full}
                    target="_blanket"
                    title="Original in a new tab"
                  >
                    <img
                      src={photo.urls.regular}
                      alt={photo.alt_description}
                      title={photo.alt_description}
                      className="img-fluid shadow-1-light rounded mb-3"
                    />
                  </a>

    </div> 
    )
})
}
        

    
</div> 
    
    )}else{
        return null
    }
}
export default ResultPhotoes
//