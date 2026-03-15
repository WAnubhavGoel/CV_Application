import { useState } from "react";
import { defData } from "./components/data";
import { GeneralInformation } from "./components/GeneralInformation";
import "./App.css"
function App(){
  const [data,setData]=useState(defData);
  function handleGeneralInfoUpdate(newData){
    setData({...data,general_information:newData})
  }
  return(
    <div className="container">
      <div className="left">
        <GeneralInformation data={data.general_information} onSubmit={handleGeneralInfoUpdate}></GeneralInformation>
      </div>
      <div className="right"></div>
    </div>
  )
}
export {App}