import React from 'react';
import './App.css';
import Button from './components/Button/Button';

function App() {
  return (
    <div className="App">
      <Button text="hello"
        onButtonClicked={() => {
          console.log('toto');
        }}
        bgcolor="tomato"
        color="brown"
      />

      <Button text="click" styleNew={{textDecoration:'underline blue', fontStyle:'italic'}}/>
      <Button text="button3" styleNew={{backgroundColor:'grey'}} bgcolor="blue"/>
    </div>
  );
}

export default App;
