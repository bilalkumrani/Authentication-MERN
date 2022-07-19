import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
    axios
      .get("http://localhost:4000/allusers")
      .then((result) => setUsers(result.data.users));
  }, []);
  const handleSubmit = () => {
    navigate("/update");
  };
  return (
    <div className="container">
      <table className="mt-5 table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Picture</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{""}</td>
                {JSON.parse(localStorage.getItem("user"))._id == user._id ? (
                  <button
                    className="btn btn-success m-2"
                    onClick={handleSubmit}
                  >
                    Update
                  </button>
                ) : (
                  " "
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
