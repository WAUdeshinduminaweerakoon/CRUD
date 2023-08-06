import React from 'react';

export default function AddUser() {
  return (
    <div className="container">
        <div class="row">
            <div class="col-md-6 offset-md-2 border p-3 mt-2 shadow">
                <h2 className="text-center m-3">Register User</h2>
                <div className="mb-3">
                    <label htmlFor="Name" className="form-label">
                        Name
                    </label>
                    <input type={"text"}
                     className="form-control"
                     placeholder="Enter Your name"
                     name = "name"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="UserName" className="form-label">
                        UserName
                    </label>
                    <input type={"text"}
                     className="form-control"
                     placeholder="Enter Your username"
                     name = "userName"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="Email" className="form-label">
                        E-mail
                    </label>
                    <input type={"text"}
                     className="form-control"
                     placeholder="Enter Your e-mail address"
                     name = "email"/>
                </div>
            </div>
            
        </div>
    </div>
  )
}
