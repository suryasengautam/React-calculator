import logo from './logo.svg';
import './App.css'
import {useState} from "react";
function App() {
  let [buttonState,setButtonState] = useState("")
  const buttonValue = (e) => {
    let value = e.target.value
    setButtonState(buttonState.concat(value))
  }
  //all clear function
  function clearHandler(){
    setButtonState("")

  }
  function backHandler(){
    let lengthBack = buttonState.length
    console.log(buttonState);
    let newButtonstate = buttonState.split("")
    newButtonstate.splice(lengthBack-1,1)
    console.log(newButtonstate);
     setButtonState( newButtonstate.join(""))

  }
  const calcResult = () => {
    let mainbuttonState = buttonState.split(" ");
    for (let i = 0;i< mainbuttonState.length;i++){
      if (mainbuttonState[i] === "/"){
        let resultbuttonState = (parseFloat(mainbuttonState[i-1]) / parseFloat(mainbuttonState[i+1])).toString()
        mainbuttonState.splice(i-1,3,resultbuttonState)
        i = 0
      }
    }
    for (let i = 0;i< mainbuttonState.length;i++){
      if (mainbuttonState[i] === "*"){
        let resultbuttonState = (parseFloat(mainbuttonState[i-1]) * parseFloat(mainbuttonState[i+1])).toString()
        mainbuttonState.splice(i-1,3,resultbuttonState)
        i = 0
      }
    }
    for (let i = 0;i< mainbuttonState.length;i++){
      if (mainbuttonState[i] === "+"){
        let resultbuttonState = (parseFloat(mainbuttonState[i-1]) + parseFloat(mainbuttonState[i+1])).toString()
        mainbuttonState.splice(i-1,3,resultbuttonState)
        i = 0
      }
    }
    for (let i = 0;i< mainbuttonState.length;i++){
      if (mainbuttonState[i] === "-"){
        let resultbuttonState = (parseFloat(mainbuttonState[i-1]) - parseFloat(mainbuttonState[i+1])).toString()
        mainbuttonState.splice(i-1,3,resultbuttonState)
        i = 0
      }
    }
    if (isNaN(mainbuttonState[0] )){

      setButtonState("enter correct number");
    }
    else{
      setButtonState(mainbuttonState[0]);
    }
  }
  return (
    <div className="box">
      <div className="buttons">
        <div><input id="out" placeholder="🤩By Suryasen😎" value = {buttonState}></input></div>
        <div className='row__one'>
          <button  onClick={buttonValue} value="7">7</button>
          <button onClick={buttonValue} value="8">8</button>
          <button onClick={buttonValue}  value="9">9</button>
          <button onClick={buttonValue} value=" / " className="operator">/</button>
        </div>
        <div className='row__two'>
          <button onClick={buttonValue} value="6">6</button>
          <button onClick={buttonValue} value="5">5</button>
          <button onClick={buttonValue} value="4">4</button>
          <button onClick={buttonValue} value=" * " className="operator">*</button>

        </div>
        <div className='row__three'>
          <button onClick={buttonValue} value="3">3</button>
          <button onClick={buttonValue} value="2">2</button>
          <button onClick={buttonValue} value="1">1</button>
          <button onClick={buttonValue} value=" - " className="operator">-</button>
        </div>
        <div className='row__four'>
          <button onClick={buttonValue} value=".">.</button>
          <button onClick={buttonValue} value="0">0</button>
          <button onClick={calcResult} > = </button>
          <button onClick={buttonValue} value=" + " className="operator">+</button>
        </div>
        <div>
          <button  className="clear" onClick = {clearHandler}>CLEAR</button>
          <button  className="cut"  onClick={backHandler}>back</button>
        </div>
      </div>
    </div>
  );
}

export default App;
