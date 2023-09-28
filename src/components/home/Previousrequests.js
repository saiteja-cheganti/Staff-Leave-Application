import './leaverequest.css'
import { useContext } from 'react';
import { leavesContext } from '../../contexts/LeavesContext';
import { todo } from './../../contexts/LoginContext'
function Previousrequests(){

    let [userDetails,getUserDetails] = useContext(todo);
    let [userLeaves,getLeaveDetails] = useContext(leavesContext);
    
   
    return(
        <div className="text-center allreq">
            <h4 className="text-primary" style={{margin:'20px'}}>Previous Leaves</h4>
            <div className="heading">
               <h4 style={{textAlign:'left', paddingLeft:"40px"}}>Reason</h4>
               <h4>Days</h4>
               <h4>Status</h4>
            </div>
            <div className="requests">
                   {
                    userLeaves?.data?.leave?.map(userObj=>
                             <div className="request"  key={userObj.id}>
                                <p  style={{textAlign:'left' ,wordWrap: 'break-word',paddingLeft:"40px"}}>{userObj.message}</p>
                                <p>{userObj.days}</p>
                                <p>{userObj.status}</p>
                            </div>
                        )
                    } 
            </div>
 
        </div>
    );


}

export default Previousrequests