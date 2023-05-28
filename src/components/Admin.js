import React from 'react'
import Home from "./adminComp/Leavereq";
import Users from "./adminComp/Displaystaff";
import Register from "./adminComp/Register";
import { useEffect,useState } from 'react';
import axios from 'axios';
function Admin() {
  var [info,getInfo] = useState([])
    
    useEffect(()=>{
        // axios.get('http://localhost:3999/admin/users')
        // .then(userData=>{
        //     delete userData.data?.Admin1;
        //     getInfo(userData.data)    
        // })
        // .catch((err)=>console.log(err))
        getData();
    },[])

    function getData() {
    console.log("yoooo")
      axios.get('http://localhost:3999/admin/users')
        .then(userData=>{
            delete userData.data?.Admin1;
            getInfo(userData.data)    
        })
        .catch((err)=>console.log(err))
    }
    console.log(info)

  return (
    <div className='container'>
        <Home/>
        <Users  data={info}/>
        <Register fun ={getData}/>
    </div>
  )
}

export default Admin





































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