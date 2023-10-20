import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API } from "../api";
import { AuthContext } from "../contexts/AuthContext";

export function JobDelete() {
  const [loading, setLoading] = useState(false)
  const [loadingJob, setLoadingJob] = useState(false)
  const { user: { token } } = useContext(AuthContext)
  const navigate = useNavigate()
  const [job, setJob] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    setLoadingJob(true)
    function fetchJob() {
      axios.get(API.jobs.retrieve(id))
        .then(res => {
          setJob(res.data)
        })
        .finally(() => {
          setLoadingJob(false)
        })
    } fetchJob()
  }, [id])


  function handleSubmit(e: any) {
    e.preventDefault()
    setLoading(true)
    axios.delete(API.jobs.delete(id), {
      headers: {
        "Authorization": `Token ${token}`
      }
    })
      .then(res => {
        navigate(`/`)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <div>
      {loadingJob && "fetching data ..."}
      {loading && "Loading ..."}
      <div>
        {job && (
          <form onClick={handleSubmit}>
            <button className="mt-2 bg-sky-800 hover:bg-sky-600 text-white px-3 py-3 rounded-md shadow-sm" type="submit">Submit</button>
          </form>
        )}
      </div>
    </div >
  )
}
