import './App.css';
import { useState } from 'react';

function App() {

  const DEFAULT_HEIGHT = 165;
  const DEFAULT_WEIGHT = 70;
  const DEFAULT_BMI = ((70*100*100)/(165*165)).toFixed(2)

  const  [bmi , setBmi] = useState(DEFAULT_BMI)
  const [height, setHeight] = useState(DEFAULT_HEIGHT);
  const [weight, setWeight] = useState(DEFAULT_WEIGHT);

  function calculateBmi(){
    const newBmi = ((weight*10000)/(height*height)).toFixed(2);
    setBmi(newBmi)
  }

  function onWeightChange(event){
    const newWeight = event.target.value;
    setWeight(newWeight)
    calculateBmi()
  }

  function onHeightChange(event){
    const newHeight = event.target.value;
    setHeight(newHeight)
    calculateBmi()
  }

  return (
    <div>
      <p>Height : {height} cm</p>
      <input type='range' onChange={(event)=> {setHeight(event.target.value); calculateBmi()}} className='input-slider' defaultValue={height} min="100" max="200"/> 
      <p>Weight : {weight} kg</p>
      <input type='range' onChange={onWeightChange} className='input-slider' defaultValue={weight} step="1" min="30" /> 
      <div>
        BMI is : {bmi}
      </div>
    </div>
  )
}

export default App;
