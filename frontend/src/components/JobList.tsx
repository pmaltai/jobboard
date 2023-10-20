import axios from "axios"
import { HiClock, HiCurrencyDollar, HiLocationMarker, HiOfficeBuilding } from 'react-icons/hi'
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { API } from "../api"

function JobListItems({ job }: any) {
  return (
    <div className="border border-gray-200 px-3 py-5 rounded-md shadow-sm tracking-wide font-mplus mt-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-between">
          {job["company_logo"] && (
            <img src={job["company_logo"]} alt={job["company_name"]} className="w-14 rounded-full" />
          )}
          <NavLink to={`/jobs/${job["id"]}`}>
            <h3 className="text-3xl text-indigo-900 font-playFair font-semibold">{job["title"]}</h3>
          </NavLink>
        </div>
        {job["remote"] && (
          <span className="font-semibold text-green-900 bg-green-200 text-xs px-1 py-1 rounded-full">remote</span>
        )}
      </div>
      <p className="mt-2 text-gray-600 flex items-center gap-3"><HiCurrencyDollar />{Number(job["salary"]).toLocaleString()}</p>
      <p className="text-gray-600 flex items-center gap-3"><HiOfficeBuilding />{job["company_name"]}
        <a href={job["company_url"]} className="text-blue-600 hover::text-blue-800 italic ml-5" rel="noopener noreferrer" target="_blank">visit website</a>
      </p>
      <p className="text-gray-600 flex items-center gap-3"><HiLocationMarker />{job["location"]}</p>
      <p className="text-gray-600 flex items-center gap-3 text-sm italic"><HiClock />{new Date(job["date_created"]).toLocaleDateString()}</p>
    </div>
  )
}

export function JobList() {
  const [jobs, setJobs] = useState(null)

  useEffect(() => {
    function fetchJobs() {
      axios.get(API.jobs.list)
        .then(res => {
          setJobs(res.data)
        })
    } fetchJobs()
  }, [])

  return (
    <div>
      {!jobs && "loading ..."}
      {jobs && (jobs as any[]).map(job => {
        return <JobListItems key={job["id"]} job={job} />
      })}
    </div>
  )
}
