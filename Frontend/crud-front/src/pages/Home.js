
import React , {  useEffect, useState } from "react";
import axios from "axios";

export default function Home() {

  const [users, setUsers]= useState([]);  
  

    useEffect(()=>{
      loadUsers();
    },[] );

    const loadUsers =async ()=>{
     

    const result =await axios.get("http://localhost:8080/users");
    setUsers(result.data);
   };




  return (

    <div className="container ">
        <dvi className= 'py-4'>
        <table className="table border shadow table table-striped table-hove">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">name</th>
      <th scope="col">userName</th>
      <th scope="col">email</th>
    </tr>
  </thead>
  <tbody>
    {
      users.map(
        (user,index)=>(
        <tr>
          <th scope="row" key={index}>{index+1}</th>
          <td>{user.name}</td>
          <td>{user.userName}</td>
          <td>{user.email}</td>
        </tr>

          )
      )   
    }  
    
   
  </tbody>
</table>

        </dvi>

    </div>
  )
}
