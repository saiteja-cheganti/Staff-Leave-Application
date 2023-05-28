import './details.css';
import { useContext } from 'react';
//import {} from './../.../contexts/LoginContext'
import {todo} from './../../contexts/LoginContext'
function Details(){
let [userData,getUserDetails]= useContext(todo);
    

    console.log(userData)
    return (
        <div>
            <div className="flex flex-col text-center w-full mb-20">
      <h1  className="name">Wellcome {userData?.data?.userDetails?.userName}</h1>
    </div>
            <section className="text-gray-900 ">
  <div className="container px-5 py-10 mx-auto" >
    
    <div className="container text-center" >
        <div className='row det'>
      <div className="sec">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 16 16">
            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/>
          </svg>
          <p className="title-font font-medium text-3xl text-gray-900">TOTAL LEAVES</p>
          <h2 className="title-font font-medium text-3xl text-gray-900">{userData?.data?.userDetails?.leaveRemaining}</h2>
        </div>
      </div>
      <div className="sec">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-earmark-check text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 16 16">
            <path d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
            <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/>
          </svg>
          <p className="title-font font-medium text-3xl text-gray-900">PREVIOUS LEAVES</p>
          <h2 className="title-font font-medium text-3xl text-gray-900">{userData?.data?.userDetails?.leaveUsed}</h2>
        </div>
      </div>
      <div className="sec">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-earmark-lock2 text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 16 16">
            <path d="M10 7v1.076c.54.166 1 .597 1 1.224v2.4c0 .816-.781 1.3-1.5 1.3h-3c-.719 0-1.5-.484-1.5-1.3V9.3c0-.627.46-1.058 1-1.224V7a2 2 0 1 1 4 0zM7 7v1h2V7a1 1 0 0 0-2 0z"/>
            <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/>
          </svg>
          <p className="title-font font-medium text-3xl text-gray-900">ELIGIBLE LEAVES </p>
          <h2  className="title-font font-medium text-3xl text-gray-900">{userData?.data?.userDetails?.leaveRemaining-userData?.data?.userDetails?.leaveUsed}</h2>
        </div>
      </div>
      </div>
    </div>
  </div>
</section>
        </div>
    );
}

export default Details