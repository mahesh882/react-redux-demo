import Comp1 from "./comp1"
import Comp2 from "./comp2"
import {useState} from "react"
const MainPage = ()=>{
    const[buttnValue,setVlaue]=useState("");
    const btnClickComp1=(a)=>{
        console.log("call Btn",a);
       setVlaue(a)
    }
    return(<div>Main Page 
         <Comp1 btnClickComp1={btnClickComp1}/>
         <Comp2 buttnValue={buttnValue}/>
    </div>)
}
export default MainPage