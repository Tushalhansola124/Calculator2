
import './App.css'
import Display from './componets/Display';
import ButtonContainer from './componets/ButtonContainer';
import { useState } from 'react';


function App() {
  const [calVal,setcalVal]=useState("");  
  const clickbtn=(buttonText)=>{
  if(buttonText==='C')
  {
    setcalVal("");
  }
  else if(buttonText==='=')
  {
      const result=eval(calVal);
      setcalVal(result);
  }
  else{
    const newValue=calVal+buttonText;
    setcalVal(newValue);
  }
  
  
  

    
    
  }
  return(
    <>
    <center>
      <div className='calculatorContainer'>
    
          <Display calVal={calVal}></Display>
          <ButtonContainer clickbtn={clickbtn} ></ButtonContainer>
        
      </div>
      </center>
    </>

  );
}

export default App
