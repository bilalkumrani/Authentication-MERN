import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UpdateDetails = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(
    localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {}
  );
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((state) => {
      return {
        ...state,
        [name]: value,
      };
    });
  };
  const handleSubmit = () => {
    axios
      .post("http://localhost:4000/update", {
        user: {
          name: user.name,
          email: user.email,
          _id: user._id,
        },
        token: localStorage.getItem("token"),
      })
      .then((data) => {
        localStorage.setItem("user", JSON.stringify(data.data.user));
        navigate("/");
        window.location.reload();
      });
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
                    value={user.name}
                  />
                  <div class="invalid-feedback">A valid Name is required!</div>{" "}
                  <span>Email or username</span>
                  <input
                    autocomplete="off"
                    type="text"
                    name="email"
                    onChange={handleChange}
                    value={user.email}
                  />
                  <div class="invalid-feedback">A valid email is required!</div>
                </div>

                <div class="mb-3">
                  {" "}
                  <button
                    onClick={handleSubmit}
                    className="btn btn-success w-100"
                  >
                    Update
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

export default UpdateDetails;
