import { createContext,useState } from "react";
import axios from "axios";
export let adminContext = createContext();

function AdminContext({children}) {
    let [users,getUsers] = useState({});

    let getUsersDB = ()=>{
      axios.get("http://localhost:3999/users/users")
      .then((res)=>{
          if(res.status===201){
              getUsers(res);
              console.log(res)
          }
     })
     .catch((err)=>
        console.log(err))
    }

  return (
    <adminContext.Provider value={[users,getUsersDB]}>
        {children}             
    </adminContext.Provider>
  )
}

export default AdminContext