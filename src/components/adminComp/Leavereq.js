import './adminLeavereq.css'
import axios from 'axios';
import { useEffect,useState } from 'react';
function Leavereq(){

var [leaves,getLeaves]= useState([]);

useEffect(()=>{
    axios.get('http://localhost:3999/admin/leaves')
        .then(userData=>{
           // delete userData.data?.Admin1;
            console.log(userData.data)
            getLeaves(userData.data)
        })
        .catch((err)=>console.log(err))
},[])
            console.log(leaves)    
    return (
        <div className="text-center allreq">
            <h4 className="text-primary" style={{margin:'20px'}}>Previous Leaves</h4>
            <div className="heading">
                <h4>Name</h4>
               <h4 style={{textAlign:'left', paddingLeft:"40px"}}>Reason</h4>
               <h4>Days</h4>
               <h4>Status</h4>
               <h4>Grant/Deny</h4>
            </div>
            <div className="requests">
                   {
                    leaves.map(userObj=>
                             <div className="request"  key={userObj.id}>
                                <p style={{textAlign:'center'}}>{userObj.mail}</p>
                                <p>{userObj.message}</p>
                                <p>{userObj.days}</p>
                                <p>{userObj.status}</p>
                                <p>
                                    <button className="btn btn-primary">GRANT</button>
                                    <button className='btn btn-danger'>DENY</button>
                                </p>
                            </div>
                        )
                    } 
            </div>

</div>
    );

}


export default Leavereq