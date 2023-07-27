import { React,useState } from "react";

const HOCDemo = (OriginalComponent)=>{

    function NewComponent (props){

        const [count,setCount] = useState(0)
        const incrementCount=()=>{
            setCount((prevState)=> prevState + props.myValue);
        }

        return <OriginalComponent
        {...props}
        count={count}
        incrementCount= {incrementCount}/>
        


    }
    return NewComponent
}


export default HOCDemo