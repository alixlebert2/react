import { MemeSVGViewer } from 'orsys-tjs-meme';
import React from 'react';
import './App.css';
import Flexwide from './components/layout_func_js/Flexwide/Flexwide';
import MemeForm from "./components/MemeForm/MemeForm";
import Header from "./components/ui/Header/Header";
import Navbar from "./components/ui/Navbar/Navbar";
import Footer from "./components/ui/Footer/Footer";
import {IImage, IMeme} from "orsys-tjs-meme/dist/interfaces/common";
import {ADR_REST, REST_RESSOURCES} from "./config/config";
import MemeThumbnail from './components/MemeThumbnail/MemeThumbnail';

interface  IAppState {
  meme: IMeme,
  memes: Array<IMeme>,
  images: Array<IImage>
}

class App extends React.Component<{}, IAppState> {
  constructor(props: any) {
    super(props);
    this.state={
      meme: {
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
      images: [],
      memes: []
};
  }

  componentDidMount() {
    const pimg=fetch(`${ADR_REST}${REST_RESSOURCES.images}`, {
      method:'GET',
      headers:{Accept: "application/json"}
    //}).then(f=>f.json()).then(arr=>{this.setState({images:arr});
      }).then(f=>f.json());
    const pmeme=fetch(`${ADR_REST}${REST_RESSOURCES.memes}`, {
      method:'GET',
      headers:{Accept: "application/json"}
      }).then(f=>f.json())
    
      Promise.all([pimg, pmeme]).then(arr_arr => {
        this.setState({images:arr_arr[0], memes:arr_arr[1]});
      })
  }

  render(){
    return <div className="App" style={{ textAlign: "center"}}>
     <Header/>
     <Navbar />
     <MemeThumbnail memes={this.state.memes} images={this.state.images}/>
     <Flexwide>
       <MemeSVGViewer 
        meme={this.state.meme} 
        image={this.state.images.find((img:IImage)=>img.id===this.state.meme.imageId)}></MemeSVGViewer>
       <MemeForm 
        meme={this.state.meme} 
        onMemeChange={(meme:IMeme) => {
          this.setState({meme:meme})
        }}
        images={this.state.images}
       ></MemeForm>
     </Flexwide>
     <Footer></Footer>
      
    </div>
  }
}

export default App;