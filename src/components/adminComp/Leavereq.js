import './adminLeavereq.css'
import axios from 'axios';
import { useEffect, useState } from 'react';
function Leavereq() {

    var [leaves, getLeaves] = useState([]);
    async function changeStatus(userLeave, status) {
        for (let i = 0; i < leaves.length; i++) {
            if (leaves[i]._id == userLeave._id) {
                axios.put(`http://localhost:3999/admin/updateLeaves/${userLeave._id}`, { newstatus: status, obj: userLeave })
                    .then(res => console.log(res))
                    .catch(err => console.log(err));
                leaves.splice(i, 1);
                getLeaves([...leaves])
            }
        }
        console.log(leaves)
    }
    useEffect(() => {
        axios.get('http://localhost:3999/admin/leaves')
            .then(userData => {
                getLeaves(userData.data)
            })
            .catch((err) => console.log(err))
    }, [])
    return (
        <div className="text-center allreq">
            <h4 className="text-primary">Previous Leaves</h4>
            <div className="heading">
                <h4>Name</h4>
                <h4 >Reason</h4>
                <h4>Leaves Remaining</h4>
                <h4>Days</h4>
                <h4>Status</h4>
                <h4>Grant/Deny</h4>
            </div>
            <div className="requests">
                {
                    leaves.map(userObj =>
                        <div className="request" key={userObj.id}>
                            <p style={{ textAlign: 'center' }}>{userObj.mail}</p>
                            <p>{userObj.message}</p>
                            <p>{userObj.leaveRemaining}</p>
                            <p>{userObj.days}</p>
                            <p>{userObj.status}</p>
                            <p>
                                <button className="btn btn-primary" onClick={() => changeStatus(userObj, "Granted")}>GRANT</button>
                                <button className='btn btn-danger' onClick={() => changeStatus(userObj, "Denied")}>DENY</button>
                            </p>
                        </div>
                    )
                }
            </div>

        </div>
    );

}


export default Leavereq



// fetch('http://localhost:3999/admin/updateLeaves/',{
//     method: "POST",
//     headers: {"content-type" : "application.json"},
//     body : JSON.stringify(targetLeave)
// }).then(res=>console.log(res))
// .catch(err=> console.log(err));