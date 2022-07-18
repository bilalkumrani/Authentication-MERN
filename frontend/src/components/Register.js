import React from "react";
import axios from "axios";
import { useState } from "react";

const Register = () => {
  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpData((state) => {
      return {
        ...state,
        [name]: value,
      };
    });
  };

  const handleSubmit = () => {
    axios
      .post("http://localhost:4000/register", signUpData)
      .then((data) => console.log(data.data.user.name));
  };
  return (
    <div>
      <div class="container mt-5">
        <div class="row d-flex justify-content-center">
          <div class="col-md-6">
            <div class="card px-5 py-5" id="form1">
              <div class="form-data" v-if="!submitted">
                <div class="forms-inputs mb-4">
                  <span>Name</span>
                  <input
                    autocomplete="off"
                    type="text"
                    name="name"
                    onChange={handleChange}
                  />
                  <div class="invalid-feedback">A valid Name is required!</div>{" "}
                  <span>Email or username</span>
                  <input
                    autocomplete="off"
                    type="text"
                    name="email"
                    onChange={handleChange}
                  />
                  <div class="invalid-feedback">A valid email is required!</div>
                </div>
                <div class="forms-inputs mb-4">
                  {" "}
                  <span>Password</span>{" "}
                  <input
                    autocomplete="off"
                    type="password"
                    name="password"
                    onChange={handleChange}
                  />
                  <div class="invalid-feedback">
                    Password must be 8 character!
                  </div>
                </div>
                <div class="mb-3">
                  {" "}
                  <button onClick={handleSubmit} className="btn btn-dark w-100">
                    Sign up
                  </button>{" "}
                </div>
              </div>
              <div class="success-data" v-else>
                <div class="text-center d-flex flex-column">
                  <i class="bx bxs-badge-check" />{" "}
                  <span class="text-center fs-1">
                    You have been logged in <br /> Successfully
                  </span>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
