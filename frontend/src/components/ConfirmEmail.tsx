import axios from "axios";
import { useContext, useState } from "react";
import { API } from "../api";
import { useParams } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";


export function ConfirmEmail() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const { key } = useParams()
  const { logout } = useContext(AuthContext)

  function handleSubmit(e: any) {
    e.preventDefault()
    setLoading(true)
    axios.post(API.auth.verifyEmail, { key })
      .then(res => {
        setSuccess(true)
        logout()
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <div>
      {success && "now you can login"}
      {loading && "Loading ..."}
      <div>
        <form onClick={handleSubmit}>
          <button className="mt-2 bg-sky-800 hover:bg-sky-600 text-white px-3 py-3 rounded-md shadow-sm" type="submit">Submit</button>
        </form>
      </div>
    </div >
  )
}
