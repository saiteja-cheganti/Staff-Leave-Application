import { useForm } from "react-hook-form";
import './request.css'
import axios from "axios";
import { useContext } from "react";
import {todo} from './../../contexts/LoginContext'
import { leavesContext } from "../../contexts/LeavesContext";
function Request(){
    let [userData,getUserDetails]= useContext(todo);
    let [userLeaves,getLeaveDetails] = useContext(leavesContext);
   const {register, handleSubmit, formState:{errors}} = useForm();
   const lastApp={
       status:"accepted"
   }
   const onFormSubmit=(leaveObj)=>{
        leaveObj.mail = userData?.data?.userDetails?.mail;
        console.log(leaveObj)
        leaveObj.status = "Pending";
        axios.post("http://localhost:3999/users/insertLeave",leaveObj)
        .then((res)=>{
          getLeaveDetails(userData.data?.userDetails)
          console.log(userData)
          })
        .catch(err=>console.log(err))
   }

    return(
        <div>
        {
          (lastApp.status==='accepted' || lastApp.status==='rejected') && 
          <section className="text-gray-600 body-font">
            <form  type="submit" onSubmit={handleSubmit(onFormSubmit)}>
              <div  className="" >
                  <div className="relative">
                    <label for="message">Kindly Write The Reason For Leave Application</label>
                      <br/>
                      <textarea id="message" rows={5} style={{resize:"none",padding:'10px', borderRadius:'10px'}} className="" {...register("message",{required:true})}></textarea>
                      {errors.message?.type==="required" && <p className="text-danger">*message is required</p>}
                      <br/>
                      <label>Please Select Number of days</label>
                      <select style={{borderRadius:'5px'}} {...register("days",{required:true})}>
                      {errors.message?.type==="required" && <p className="text-danger">*message is required</p>}
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                      </select>
                    </div>
                  
                    <div className="but">
                        <button type="submit" style={{width:'15rem'}} className="btn btn-primary">APPLY FOR LEAVE</button> 
                    </div> 
              </div>
            </form>
          </section>
        }
          
        {
            lastApp.status==="pending" && 
            <div className="pending">
            <r1> Your Request is PENDING </r1>
            <br/>
            <r3> You can Apply for New Leave when your current request is Accepted or Rejected </r3>
          </div>
        }
        </div>
    );
}

export default Request