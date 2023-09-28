import { useForm } from "react-hook-form";
import axios from "axios"

import { useNavigate } from "react-router-dom";
import { useState } from "react";
function Register(props){
    let userState = false;
    let navigate = useNavigate();
    const {register,handleSubmit,formState:{errors}}= useForm()
   console.log(props)
   let [msg,setMsg]= useState("")
    const onFormSubmit = (obj)=>{
        axios.post("http://localhost:3999/admin/signup",obj)
        .then((res)=>{
            //if(res.status===201){
                if(res.data?.Message==="User Already Exists") userState=true;
                else userState = false;
                setMsg(res.data?.Message);
                console.log(res);
                props.fun();
                //navigate("/admin")
            //}
        })
        .catch((err)=>console.log(err))
            console.log(obj)
    }

    return (
        <div className="form">
            <h1 class="h3">Log in</h1>
            <div className="pt-3" id='con' >
            <form name="form" role="form" className="mx-auto" onSubmit={handleSubmit(onFormSubmit)}>
               <div class="form-floating mb-3">
                    <input className="form-control" type="text" placeholder="StaffId" {...register("userName", {required:true,minLength:'4'})}/>
                    <label for="floatingInput">Staff Id</label>
                    {errors.staffId?.type==='minLength' && <p className="text-danger">*Id must be atleast 4 characters</p>}
                    {errors.staffId?.type==='required' && <p className="text-danger">*StaffId is required</p>}
                </div>
            <br/> 
                <div class="form-floating mb-3">
                    <input className="form-control" type="text" placeholder="StaffId" {...register("mail", {required:true,minLength:'4'})}/>
                    <label for="floatingInput">Staff Id</label>
                    {errors.staffId?.type==='minLength' && <p className="text-danger">*Id must be atleast 4 characters</p>}
                    {errors.staffId?.type==='required' && <p className="text-danger">*StaffId is required</p>}
                </div>
            <br/>
            <div class="form-floating mb-3">
                    <input className="form-control" type="password" placeholder="Password"  {...register("password", {required:true,minLength:'8'})}/>
                    <label for="floatingInput">Password</label>
                    {errors.password?.type==='minLength' && <p className="text-danger">*Password must be atleast 8 characters</p>}
                    {errors.password?.type==='required' && <p className="text-danger">*Password is required</p>}
            </div>
            <button type="submit" class="btn btn-primary">SIGN IN</button>
            { userState ? <p className="text-danger">{msg}</p>: <p className="text-success">{msg}</p>}
        
            </form> 
            </div>
        </div>
    );

}


export default Register