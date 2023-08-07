import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditUser() {

    let navigte=useNavigate()
    
    const {id}=useParams()

    const [user,setUser] = useState({
        name:"",
        userName:"",
        email:""
})

    const{name,userName,email}=user
    const onInputChange = (e)=>{
        setUser({...user, [e.target.name]:e.target.value})

    };

    useEffect(()=>{
        loadUser();
    },[]);
 
    const onSubmit = async(e)=>{
        e.preventDefault();
        await axios.put(`http://localhost:8080/user/${id}`,user);
        navigte("/");

    };
    const loadUser = async ()=>{
        const result =await axios.get(`http://localhost:8080/user/${id}`);
        setUser(result.data);
    }
   
 

  return (
    <div className="container">
        <div class="row">
            <div class="col-md-6 offset-md-2 border p-3 mt-2 shadow">
                <h2 className="text-center m-3">Edit User</h2>
                <form onSubmit={(e)=>onSubmit(e)}>
                <div className="mb-3">
                    <label htmlFor="Name" className="form-label">
                        Name
                    </label>
                    <input type={"text"}
                     className="form-control"
                     placeholder="Enter Your name"
                     name = "name"
                     value={name}
                     onChange={(e)=>onInputChange(e)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="UserName" className="form-label">
                        UserName
                    </label>
                    <input type={"text"}
                     className="form-control"
                     placeholder="Enter Your username"
                     name = "userName"
                     value={userName}
                     onChange={(e)=>onInputChange(e)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="Email" className="form-label">
                        E-mail
                    </label>
                    <input type={"text"}
                     className="form-control"
                     placeholder="Enter Your e-mail address"
                     name = "email"
                     value={email}
                     onChange={(e)=>onInputChange(e)}/>
                </div>
                <button type="submit" className="btn btn-outline-primary">submit</button>
                <Link className="btn btn-outline-danger mx-2" to="/">Cancel</Link>
                </form>
            </div>
            
        </div>
    </div>
  )
}
{/* <Link className="btn btn-outline-light" to="/Adduser">Add Users</Link> */}