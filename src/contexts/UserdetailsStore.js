// import React, { Children } from 'react'
// import { useState } from 'react'
// import axios from 'axios';
// import { loginDetailsContext } from './LoginContext';
// import { useNavigate } from 'react-router-dom';
// function UserdetailsStore() {
//     let navigate = useNavigate();
//     let [currentUser, setCurrentUser]= useState({});
//     const loginUser = (userCrendentials)=>{
//         axios.post("http://localhost/users/user-login",userCrendentials)
//         .then(res=>{
//             if(res.data.Message==="success"){
//               setCurrentUser({...res.data})

//               console.log("navigate to the home");
//               navigate("/home");
//             }
//             else{
//               console.log("user login failed")
//             }
//         })
//         .catch(err=>{
//             console.log("err in user login",err)
//         }) 
//     }
//   return (
//     <loginDetailsContext.Provider value={[currentUser,loginUser]}>
//         {Children}
//     </loginDetailsContext.Provider>
//   )
// }

// export default UserdetailsStore