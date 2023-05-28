import '../css/login.css'
import { useForm } from "react-hook-form";
import { useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import { response } from 'express';
function UserLogin(){

    const {register,handleSubmit,formState:{errors}}= useForm()
    var [token,getToken] = useState([])
    const onFormSubmit =async (obj)=>{
        // token= await axios.post('http://localhost:3999/users/user-login',obj);

        axios.post("http://localhost:3999/users/user-login",obj)
        .then((response)=>{
            if(response.status===201){
                navigate('/login')
            }
        })
        fetch("http://localhost:3999/users/user-login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
        })
        .then((res)=> res.json())
        .then((dat) => getToken(dat.token))
        .catch((err)=>console.log(err))
    }
    console.log(token)
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
                    <input className="form-control" type="password" placeholder="Password"  {...register("password", {required:true})}/>
                    <label for="floatingInput">Password</label>
                    {errors.password?.type==='minLength' && <p className="text-danger">*Password must be atleast 8 characters</p>}
                    {errors.password?.type==='required' && <p className="text-danger">*Password is required</p>}
            </div>
            <button type="submit" class="btn btn-primary">SIGN IN</button>
            </form> 
            </div>
        </div>
    );
}

export default UserLogin