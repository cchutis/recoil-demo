import './App.css';
import { useState } from 'react'
import BigText from './components/BigText';
import { massiveState, textState } from './state/atoms';
import {useRecoilState} from 'recoil'

function App() {
  const [text, setText] = useRecoilState(textState)
  const [massive, setMassive] = useRecoilState(massiveState)
  
  const handleChange = (event) => {
    setText(event.target.value)
  }

  const handleClick = () => {
    setMassive(text)
  }

  return (
    <div className="App">
     <h1>The WORST app ever</h1>
      <h3>You wanna make {text || 'something'} super big? {text === '' ? 'Enter a text below!' : 'Press the button'}</h3>
      <input type="text" name="text-field" value={text} onChange={event => handleChange(event)} /> <button onClick={handleClick}>Make M A S S I V E</button>
      <BigText text={massive}/>
    </div>
  );
}

export default App;
