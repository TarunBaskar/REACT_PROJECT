import React,{useState,useEffect,useRef} from 'react';
import "./style.css";

const App=()=>{
  const[quotes, setQuotes] = useState('');
  const textRef = useRef();
  let colors = ["#ffff00","#90ee90","#ffa500","#ff68ff","#a9a9e7"]

  const getQuote =()=>{
    fetch("https://type.fit/api/quotes")
    .then(res=>res.json())
    .then((data)=>{
      let randomNum = Math.floor(Math.random()*data.length);
      setQuotes(data[randomNum]);
    });
  }

  useEffect(()=>{
    getQuote();
  },[]);

  useEffect(()=>{
    textRef.current.style.color = colors[Math.floor(Math.random()* colors.length)]
  },[quotes]);

return(
  <>
      <div className="App">
      <h1>RANDOM QUOTE GENERATOR</h1><br/><br/><br/><br/><br/>
        <div className="quote">
       <p ref={textRef}> {quotes.text}</p>
       <p ref={textRef}> Author: {quotes.author}</p><br/>
       <div className="btnContainer">

        <button onClick = {getQuote} className='btn'>Get Quote</button>
        </div>
      </div>
      </div>
      </>
)
};

export default App;
