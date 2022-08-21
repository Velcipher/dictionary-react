import React from "react";
import {useState} from 'react'

import axios from "axios";
import WordResultText from "./WordResultText";



function SearchWord (){
const [wordData, setWordData] = useState('')
const [word, setWord] = useState('sunset')
const [loaded, setLoaded] = useState(false)
const [photos, setPhotos] = useState([]);

function load() {
  setLoaded(true);
  SearchApiWord();
}

function ShowWordData (event) {
event.preventDefault()
SearchApiWord()
}

function HandSubmit (event) {
setWord(event.target.value)

}

function ResponseApiWord(response){
setWordData({
  
  word: response.data[0].word,
  phonetics: response.data[0].phonetics,
  meanings: response.data[0].meanings
})

}

function ResponseApiPhoto (response) {
  setPhotos(response.data.results)
}

function SearchApiWord (){
const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
axios.get(apiUrl).then(ResponseApiWord)


const ApiKey = `fTlU3moSD_S4kaj9jmPIeRu_I2LJAQ3sqBgvIZHX4Fs`
const PhotoapiUrl = `https://api.unsplash.com/search/photos?page=1&query=${word}&client_id=${ApiKey}&per_page=6&orientation=landscape`
axios.get(PhotoapiUrl).then(ResponseApiPhoto)
}



if (loaded) {
return (
    <div className="container-fluid">
      
        
    <form onSubmit={HandSubmit} >
      <div className="row" id="form">
      <div className="col-9">
      <input
        type="search" className="search"
        placeholder="Enter a word..."
        onChange={HandSubmit}
      /></div>
      <div className="col-3">
      <input
        type="submit"
        value="🔎"
        className="btn-control  btn-primary w-100"
        id="btn-submit"
        onClick={ShowWordData}
       
      /></div></div>
    </form>
    <WordResultText data={wordData} photos={photos}/>
 
  
</div>
)  
}else {
  load();
  return "Loading...";
}

}
export default SearchWord