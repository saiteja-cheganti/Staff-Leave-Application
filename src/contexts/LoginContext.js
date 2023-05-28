import { createContext,useState } from "react";
//import axios from "react"
import axios from "axios";
//import axios from rea
import { useNavigate } from "react-router-dom";
export let todo = createContext();

function LoginContext({children}) {
    let [userData,setUserData] = useState({});
    let getUserDetails = (userCredentials)=>{
      axios.post("http://localhost:3999/users/user-login",userCredentials)
      .then((res)=>{
          if(res.status===201){
              console.log(res);
              setUserData(res);
           //navigate("/home")
          }
     },(err)=>console.log(err))


      //  fetch("http://localhost:3999/users/user-login", {
      //   method: "POST",
      //   headers: {
      //       "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(userCredentials),
      //   })
      //   .then((res)=> res.json())
      //   .then((dat) => {
      //               setUserData(dat);
      //   })
      //   .catch((err)=>console.log(err))
         
         console.log(userData)
    }

  return (
    <todo.Provider value={[userData,getUserDetails]}>
        {children}             
    </todo.Provider>
  )
}

export default LoginContext