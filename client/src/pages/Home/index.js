import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";

function Home (){
    const {user}= useContext(AuthContext)
    return(
        <div>{user}</div>
    )
}
export default Home;