import React, {useState, useEffect} from "react";
import axios from "axios";

function getUser(adminId){
    const getUser = async () =>{
        await axios.get(`http://localhost:3030/api/v1/user/${adminId}`,callOptionConfig)
        .then(data=>{
            setUser(data.data);
        })
        .catch(err=>{
        console.error(err);
        setErrorMessage(err.message);
        });
    };
    useEffect(() => {
      getUser();
    }, [])
  
}
export default getUser;