import { createContext,useState } from "react";
import axios from "axios";
export let leavesContext = createContext();

function LeavesContext({children}) {
    let [userLeaves,getUserLeaves] = useState({});

    let getLeaveDetails = (userCredentials)=>{
        console.log("user=",userCredentials);
      axios.post("http://localhost:3999/users/getLeaves",userCredentials)
      .then((res)=>{
          if(res.status===201){
              getUserLeaves(res);
          }
     })
     .catch((err)=>
        console.log(err))
    }

  return (
    <leavesContext.Provider value={[userLeaves,getLeaveDetails]}>
        {children}             
    </leavesContext.Provider>
  )
}

export default LeavesContext