import axios from "axios";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API } from "../api";
import { AuthContext } from "../contexts/AuthContext";

export function Layout() {
  const{user, logout} = useContext(AuthContext)
  const navigate = useNavigate()

  function handleSubmit() {
    axios.post(API.auth.logout)
    .then(res => {
        logout()
        navigate(`/login`)
      })
  }

  return (
    <nav className="max-w-4xl mx-auto px-4 py-5 border-b border-gray-100 tracking-wide font-mplus">
      <ul className="flex items-center justify-between">
        <div className="flex items-center justify-between">
          <li className="text-gray-600 hover:text-blue-600">
            <Link to="/">Home</Link>
          </li>
          <li className="text-gray-600 hover:text-blue-600 ml-2">
            <Link to="/create-job">Add a job</Link>
          </li>
        </div>
        <div className="flex items-center justify-between">
          {user ? (
          <li className="text-gray-600 hover:text-blue-600">
            <button onClick={handleSubmit}>Logout</button>
          </li>
          ): (
          <div className="flex items-center justify-between">
            <li className="text-gray-600 hover:text-blue-600 ml-2">
              <Link to="/login">Login</Link>
            </li>
            <li className="text-gray-600 hover:text-blue-600 ml-2">
              <Link to="/signup">Register</Link>
            </li>
          </div>
          )}
        </div>
      </ul>
    </nav>
  );
}
