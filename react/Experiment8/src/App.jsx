
import "./StudentCard.css";
import StudentCard from "./StudentCard.jsx";
/*function App() {
  return (
    <div>
      <h1>Student Card</h1>
      <StudentCard class="st1"name="Alice" grade="A" age={25} />
      <StudentCard class="st2" name="Bob" grade="B" age={35} />
      <StudentCard class="st3" name="Bob" grade="B" age={35} />
      <StudentCard class="st4"name="Charlie" grade="A" age={26} />
    </div>
  );
}
import React,{useState} from 'react';
function App() {
  const [isOn, setIsOn] = useState(false);
  return (
    <div style = {{textAlign: 'center', marginTop: '50px'}}>
    <h1>toggle button</h1>
    <button onClick = {() =>setIsOn(!isOn)}>
      {isOn ? 'ON' : 'OFF'}
      </button>
    </div>
  );
}
*/
import{useState}from "react";
function GameScore(){
  const[score,setScore]=useState(0);
  return(
    <div>
      <h1>Current Score:{score}</h1>
      <button onClick={()=>setScore(score+1)}>score a point</button>
    </div>
  );}

export default GameScore;