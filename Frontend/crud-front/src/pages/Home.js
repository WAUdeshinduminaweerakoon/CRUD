
import React , {  useEffect, useState } from "react";
import axios from "axios";

export default function Home() {

  const [users, setUsers]= useState([]);  
  

    useEffect(()=>{
      loadUsers();
    },[] );

    const loadUsers =async ()=>{
     const  user = {
        "name" : "hiran",
        "userName": "Hiran",
        "email":"hgahuji@gmail"
      
       }

    const result =await axios.post("http://localhost:8080/user",user);
    console.log(result.data);
   };




  return (

    <div className="container ">
        <dvi className= 'py-4'>
        <table className="table border shadow table table-striped table-hove">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>

        </dvi>

    </div>
  )
}
