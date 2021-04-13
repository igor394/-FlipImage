import './App.css';
import Image from "./components/Image";
import MakeFlip from "./components/MakeFlip";
import {useEffect, useState} from "react";

function App() {
    const[state, setState] = useState('');
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
  return (
    <div>
      <Image flip={state}/>
      <MakeFlip left={leftFlip} right={rightFlip} upDown={upDownFlip}/>
    </div>
  );
}

export default App;
