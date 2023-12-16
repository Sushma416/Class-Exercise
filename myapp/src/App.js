import ErrorBoundary from "./component/Day8/ErrorBoundary";
import Hero from "./component/Day8/Hero";
 
 export default function App() {
   return (
     <div>
       <ErrorBoundary>
        <Hero heroName="Vijay"></Hero>
       </ErrorBoundary>
       <ErrorBoundary>
        <Hero heroName="Joker"></Hero>
       </ErrorBoundary>
     </div>
   )
 }


















/*import List from"./component/day 6/List";
import Rating from "./component/day 6/Rating";
import Fingerprint from "./component/day 6/Fingerprint";
export default function App()
{
  return(
    <div>
      <List></List>
      <Rating></Rating>
    </div>
  )
}*/



















/*import PropsFunctional from "./component/Day 4/PropsFunctional";
import PropsClass from "./component/Day 4/PropsClass";
import PropsFunctionalEx1 from "./component/Day 4/PropsFunctionalEx1";
import StateClassCom from "./component/Day 4/StateClassCom";
import StateFunction from "./component/Day 4/StateFunction";
import StateHoldObjects from "./component/Day 4/StateHoldObjects";
import Twoway from "./component/Day 4/Twoway";
import Parent from "./component/Day 4/ParentChildCommunication";
import ArrowProps from "./component/Day 4/ArrowProps";

export default function App()
{
  return(
    <div>
    <PropsFunctional name="sowmya"></PropsFunctional>
    <PropsClass college="SKCT"></PropsClass>
    <PropsFunctionalEx1 college="psg"></PropsFunctionalEx1>
    <PropsFunctionalEx1 place="covai"></PropsFunctionalEx1>
    <StateClassCom color="red"></StateClassCom>
    <StateFunction carName="kia"></StateFunction>
    <StateHoldObject/>
    <DynamicRendering/>
    <TwoWayBinding/>
    <Parent/>
    <ArrowProps place="salem"></ArrowProps>
   </div>
  )

}*/


















/*import FunctionCom from "./component/FunctionCom";
import ClassComponent from "./component/ClassComponent";
export default function App()
{
  return(
  <div>
  <FunctionCom/>
  <ClassComponent/>
  </div>
  )
}*/