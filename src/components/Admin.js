import React from 'react'
import Home from "./adminComp/Leavereq";
import Users from "./adminComp/Displaystaff";
import Register from "./adminComp/Register";
import { useEffect,useState } from 'react';
import axios from 'axios';
import {Routes,Route,Link,NavLink} from 'react-router-dom'

function Admin() {
  var [info,getInfo] = useState([])
    
    useEffect(()=>{
        getData();
    },[])

    function getData() {
      axios.get('http://localhost:3999/admin/users')
        .then(userData=>{
            delete userData.data?.Admin1;
            getInfo(userData.data)    
        })
        .catch((err)=>console.log(err))
    }
    // console.log(info)

  return (
//       <div className="App">



//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//   <a className="navbar-brand" href="#">Cheganti Saiteja</a>
//   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//     <span className="navbar-toggler-icon"></span>
//   </button>

//   <div className="collapse navbar-collapse" id="navbarSupportedContent">
//     <ul className="navbar-nav ms-auto">
//       <li className="nav-item">
//         <NavLink className="nav-link active rounded-5" to="">Home</NavLink>
//       </li>
//       {/* <li className="nav-item">
//         <NavLink className="nav-link rounded-5" to="skills">Skills</NavLink>
//       </li> */}
//       <li className="nav-item">
//         <NavLink className="nav-link rounded-5" to="/admin/users">Users</NavLink>
//       </li>
//       <li className="nav-item">
//         <NavLink className="nav-link rounded-5" to="/admin/register">Register Staff</NavLink>
//       </li>
//     </ul>
//   </div>
// </nav>



// {/* 
//       <link rel="preconnect" href="https://fonts.googleapis.com"></link>
//       <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
//       <link href="https://fonts.googleapis.com/css2?family=Lora:ital@1&display=swap" rel="stylesheet"></link> */}
//       <Routes>
//         <Route path='' element={<Home/>}></Route>
//         {/* <Route path='/staff' id='ski' element={<Home/>}></Route> */}
//         <Route path='http://localhost:3000/users' element={<Users/>}></Route>
//         <Route path='/admin/register' element={<Register/>}></Route>
//       </Routes>
//     </div>
    
  


    <div className='container'>
        <Home/>
        {/* <Users  data={info}/> */}
        <Users/>
        <Register fun ={getData}/>
    </div>
  )
}

export default Admin







        // axios.get('http://localhost:3999/admin/users')
        // .then(userData=>{
        //     delete userData.data?.Admin1;
        //     getInfo(userData.data)    
        // })
        // .catch((err)=>console.log(err))































// import { Routes,Route } from "react-router-dom";
// import Home from "./adminComp/Leavereq";
// import Users from "./adminComp/Displaystaff";
// import Register from "./adminComp/Register";
// import { NavLink,Navigate ,Outlet} from "react-router-dom";
// function Admin(){
//     console.log("flgnflgndfgnd;fgknd;fkngd;fkgnsd;fgnsdf;gkndf;glkndfgl;kndfg;lkndf")
//     return (
//       <div>
//           <h1 className="text-secondary admin" style={{margin:'20px'}}>Admin Page</h1>  
//             <ul className="nav nav-pills justify-content-around">
//                 <li className="nav-item">
//                   <NavLink className="nav-link" to='/leavereq'>Home</NavLink>
//                 </li>
//                 <li className="nav-item">
//                   <NavLink className="nav-link" to='/register'>Register New Faculity</NavLink>  
//                 </li>
//                 <li className="nav-item active">
//                   <NavLink className="nav-link" to='/users'>Faculity Details</NavLink>
//                 </li>
//             </ul>


//             <Routes>
//               <Route path='/admin' element={<Navigate replace to="/leavereq"></Navigate>}></Route>
//               <Route path='/leavereq' element={<Home/>}></Route>
//               <Route path='/users' element={<Users/>}></Route>
//               <Route path='/register' element={<Register/>}></Route>
//             </Routes>
//          </div>
//         // <div>
//         //    <div>
//         //         <ul className="nav nav-pills justify-content-around">
//         //             <li className="nav-item">
//         //             <h1>sdsd</h1>
//         //                 <NavLink className="nav-link" to="leavereq"> Leave Requests</NavLink>
//         //             </li>
//         //             <li className="nav-item">
//         //                 {/* <NavLink className="nav-link" to="displaystaff">Staff Details</NavLink> */}
//         //             </li>
//         //             <li className="nav-item">
//         //                 {/* <NavLink className="nav-link" to="registernew">Register New Staff</NavLink> */}
//         //             </li>
//         //     </ul>
//         //     </div>
//         //       <Routes>
//         //     <Route path='' element={<Navigate replace to="leavereq"></Navigate>}></Route>
//         //     <Route path='leavereq' element={<Leavereq/>}></Route>
//         //     {/* <Route path='displaystaff' element={<Displaystaff/>}></Route> */}
//         //     {/* <Route path='registernew' element={<Register/>}></Route> */}
//         //     </Routes>
             
            
//         //     <h1>ssjflsk</h1>
//         // </div>
//     );

// }


// export default Admin