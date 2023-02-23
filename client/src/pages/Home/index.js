import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";

function Home (){
    const {user,Logout}= useContext(AuthContext)

    function LogoutUser(){
        Logout()
    }

    return(
        <div>
            <button onClick={()=>LogoutUser()}>Logout</button>
            <div>{user}</div>
        </div>
    )
}
export default Home;