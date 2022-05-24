import React from 'react';
import './App.css';
import Button from './components/Button/Button';

class App extends React.Component{
  constructor(props) {
    super(props);
    // valeur initiale du conteneur étatique
    this.state={counter:0, message: 'aucun message'};
  }
  componentDidMount(prevProps,prevState) {
    this.setState({message:'composant monté'});
    console.log('montage du cmp fini');
  }
  componentDidUpdate(prevProps,prevState) {
    console.log('ancienne, actuelle');
  }

  render(){
    return <div className="App" style={{ textAlign: "center"}}>
      <div style={{textAlign:'center'}}>Valeur de COUNTER : {this.state.counter}</div>
      <hr/>

      <Button 
        bgcolor='skyblue'
        onButtonClicked={() => {
          this.setState({counter:this.state.counter+1})
          console.log(this.state.counter);
          }}
      >Ajouter 1</Button> 

      <Button 
        bgcolor='tomato'
        onButtonClicked={() => {
          this.setState({counter:this.state.counter-1})
          console.log(this.state.counter);
          }}
      >Soustraire 1</Button>

      <hr/>
      <Button><div>Content button<hr/>ligne2</div></Button>
      <Button><div>Content button</div>ligne2</Button>
      <Button>Content button</Button>
    </div>
  }
}

export default App;