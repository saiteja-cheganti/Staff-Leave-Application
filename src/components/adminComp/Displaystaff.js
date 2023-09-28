import { useState, useEffect } from "react";
import axios from "axios";
function Displaystaff() {
    var [staff, getStaff] = useState([])
    // console.log(info);

    async function  deleteStaff(deleteObj ) {
        for (let i = 0; i < staff.length; i++) {
            if (staff[i].mail == deleteObj.mail) {
                axios.delete(`http://localhost:3999/admin/deleteStaff/${deleteObj.mail}`)
                .then(res=>console.log(res))
                .catch(err=> console.log(err));  
                staff.splice(i, 1);
                getStaff([...staff])
            }
        }
    }



    useEffect(()=>{
        axios.get('http://localhost:3999/admin/users')
        .then(userData=>{
            delete userData.data?.Admin1;
            getStaff(userData.data)    
        })
        .catch((err)=>console.log(err))
    },[])
    
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
                        staff.map(userObj => <tr key={userObj.id}>
                            <td>{userObj.mail}</td>
                            <td>{userObj.userName}</td>
                            <button onClick={()=> deleteStaff(userObj)}>Delete Staff</button>
                        </tr> )
                    }
                </tbody>
            </table>

        </div>
    );

}


export default Displaystaff



//  useEffect(()=>{
//             fetch('https://localhost:3000/users')
//             .then(res=> res.json())
//             .then(userta=>getUsers(userta.data))
//             .catch((err)=>console.log(err))
//         },)