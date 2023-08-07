import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewUser() {

    const [user,setUser]=useState({
        name:"",
        userName:"",
        email:""
    });

    const {id} =useParams();

    useEffect(()=>{
        loadUser();
    },[]);

    const loadUser = async ()=>{
        const result= await axios.get(`http://localhost:8080/user/${id}`);
        setUser(result.data);
    }


   




  return (
    <div className="container">
        <div class="row">
            <div class="col-md-6 offset-md-2 border p-3 mt-2 shadow">
                <h2 className="text-center m-3">User Details</h2>

                <div className="card">
                    <div className="card-header">
                     <b>   Details of user id : {user.id}</b>
                        <ul className="list-group list-group-flush">
                            <ul className="list-group-item">
                                <b>Name:</b> {user.name}
                            </ul>
                            <ul className="list-group-item">
                                <b>UserName:</b> {user.userName}
                            </ul>
                            <ul className="list-group-item">
                                <b>Email:</b> {user.email}
                            </ul>
                        </ul>

                    </div>

                </div>
                <Link className="btn btn-primary my-2 " to={"/"}>Back to Home</Link>
            </div>
        </div>
            
    </div>
  );
}
