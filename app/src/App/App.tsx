import { MemeSVGViewer } from 'orsys-tjs-meme';
import React from 'react';
import './App.css';
import Flexwide from './components/layout_func_js/Flexwide/Flexwide';
import MemeForm from "./components/MemeForm/MemeForm";
import Header from "./components/ui/Header/Header";
import Navbar from "./components/ui/Navbar/Navbar";
import Footer from "./components/ui/Footer/Footer";
import {IImage, IMeme} from "orsys-tjs-meme/dist/interfaces/common";

interface  IAppState {
  meme: IMeme,
  images: Array<IImage>
}

class App extends React.Component<{}, IAppState> {
  constructor(props: any) {
    super(props);
    this.state={meme: {
      color: "red",
      fontSize: 40,
      fontWeight: "900",
      imageId: 0,
      italic: false,
      text: "1er meme",
      titre: "dummy",
      underline: false,
      x: 0,
      y: 50,
    },
  images: []
};
  }

  render(){
    return <div className="App" style={{ textAlign: "center"}}>
     <Header/>
     <Navbar />
     <Flexwide>
       <MemeSVGViewer meme={this.state.meme} image={undefined}></MemeSVGViewer>
       <MemeForm meme={this.state.meme} onMemeChange={(meme:IMeme) => {
         this.setState({meme:meme})
       }}></MemeForm>
     </Flexwide>
     <Footer></Footer>
      
    </div>
  }
}

export default App;