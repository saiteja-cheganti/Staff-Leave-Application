import { useState,useEffect } from "react";
import axios from "axios";
function Displaystaff(props){
    console.log(props)
    // var [info,getInfo] = useState([])
    var info = props.data;
    // useEffect(()=>{
    //     axios.get('http://localhost:3999/admin/users')
    //     .then(userData=>{
    //         delete userData.data?.Admin1;
    //         getInfo(userData.data)    
    //     })
    //     .catch((err)=>console.log(err))
    // },[])
    // console.log(info)

//     var [users,getUsers] = useState([])
//    useEffect(()=>{
//         fetch('https://localhost:3000/users')
//         .then(res=> res.json())
//         .then(userta=>getUsers(userta.data))
//         .catch((err)=>console.log(err))
//     },)
//     console.log(users,"sdvsdsdfds")
    return (
        <div className="text-center">
            <p className="display-2 text-secondary">Users data</p>
            <table className="table">
                <thead>
                    <tr>
                        {/* <td>Id</td> */}
                        <td>Email Id</td>
                        <td>First Name</td>
                        {/* <td>Last Name</td>
                        <td>Avatar</td> */}
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        info.map(userObj=><tr key={userObj.id}>
                                {/* <td>{userObj.id}</td> */}
                                 <td>{userObj.mail}</td>
                                <td>{userObj.userName}</td> 
                                {/* <td>{userObj.last_name}</td> */}
                                {/* <td><img src={userObj.avatar}/></td> */}
                            </tr>
                         )
                    }
                </tbody>
            </table>
            
        </div>
    );

}


export default Displaystaff