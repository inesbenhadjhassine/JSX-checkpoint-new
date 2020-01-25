import React from 'react';
import logo from './logo.svg';
import './App.css';
import imageinsrc from "./imageinsrc.jpg"
import "./Style.css"

function App() {
  return (


<div style={{border:'solid 1px black',maxWidth:'100vw'}}>

	<h1 className="title red">{"My title"}</h1>

	<br/>

<img src={imageinsrc}/>

<br/>
	<img src="/imageinpublic.png" />


</div>



  
  
  
  
  );
}
export default App;





