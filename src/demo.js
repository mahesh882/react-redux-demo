import {useState,useEffect,useContext} from "react"
import { connect,useSelector,useDispatch } from "react-redux";
import {addData,removeData} from "./redux/actions/demo"
import {ThemeContext} from './App';

const DemoData =(props)=>{
//@ Get state using useSelector 
const numOfDoneTodos = useSelector((state)=>state.demoData)

//@ Redux action call using useDispatch
const dispatch = useDispatch()
const valus = useContext(ThemeContext)
const dataArr=[2,5]
const [state, setState] = useState(0);
dataArr?.map((item,index)=>{
 return(<div>{index}</div>)
})
useEffect(()=>{
  const f = async ()=>{
    const g = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(5)
        }, 5000)
      })
    }
    const val = await g();
    setState(val)
  }
  f();
},[])

return(<div>
{state}
Counter : {numOfDoneTodos.dataObj}<br/><br/>
  
  <input type="button" value="+" onClick={()=>{dispatch(addData(numOfDoneTodos.dataObj+1))}}/>&nbsp;&nbsp;&nbsp;&nbsp;
  <input type="button" value="-" onClick={()=>{dispatch(removeData(numOfDoneTodos.dataObj-1))}}/> 

  </div>)

} 

// // Redux state
// const mapStateToProps = (state) => ({
//   datavalue:state.demoData
// });

// // Redux props
// const mapDispatchToProps = {
// addData:addData,
// removeData:removeData
// };

//Reduc connect
//export const DemoData = connect(null,null)(Demo);
export default DemoData;