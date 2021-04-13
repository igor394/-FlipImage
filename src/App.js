import './App.css';
import Image from "./components/Image";
import MakeFlip from "./components/MakeFlip";
import {useEffect, useState} from "react";
import SelectImg from "./components/SelectImg";
import View from "./components/View";

function App() {
    const[state, setState] = useState('');
    const [changeImg, setChangeImg] = useState('fish.png');
    const [preView, setPreView] = useState('');

    useEffect(()=>{
        if (state>= 360) setState(prev=> prev - 360);
        if (state<= -360) setState(prev=> prev + 360);
    }, [state])

    const leftFlip =()=>{
        let newFlip = state - 90;
        setState(newFlip)
    }
    const rightFlip =()=>{
        let newFlip = state + 90;
        setState(newFlip)
    }
    const upDownFlip =()=>{
        let newFlip = state - 180;
        setState(newFlip)
    }
    const selectImg=(event)=>{
        event.preventDefault();
        console.log(event.target.elements.url.value);
        console.log(event.target);
        let file = event.target.elements.url.value;
        setChangeImg(file);
    }

    const viewImage =(event)=>{
        setPreView(event.target.value)
    }

  return (
    <div className="main">
          <Image flip={state} img={changeImg}/>
          <MakeFlip left={leftFlip} right={rightFlip} upDown={upDownFlip}/>
          <SelectImg select={selectImg} view={viewImage}/>
           <View view={preView}/>
    </div>
  );
}

export default App;
