import Details from "./home/Details";
import Request from "./home/Request";
import Previousrequests from "./home/Previousrequests";
import { useContext } from "react";
import { todo } from '../contexts/LoginContext';
import LeavesContext from "../contexts/LeavesContext";
function Home(){
    let [userData,getUserDetails]= useContext(todo);
    console.log(userData);
    return (
        <div>
            <Details/>
            <Request/>
            <Previousrequests/>
        </div>
    );
}

export default Home