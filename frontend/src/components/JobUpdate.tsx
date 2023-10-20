import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API } from "../api";
import { AuthContext } from "../contexts/AuthContext";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';


export function JobUpdate() {
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


  function handleSubmit(values: any) {
    setLoading(true)
    axios.put(API.jobs.update(id), values, {
      headers: {
        "Authorization": `Token ${token}`
      }
    })
      .then(res => {
        navigate(`/jobs/${id}`)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const SignupSchema = Yup.object().shape({
    title: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    company_name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    company_url: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    location: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    salary: Yup.number()
      .integer("must be integer")
      .required('Required'),
  });

  return (
    <div>
      {loadingJob && "fetching data ..."}
      {loading && "Loading ..."}
      <div>
        {job && (
          <Formik
            initialValues={{
              title: job['title'],
              company_name: job['company_name'],
              company_url: job['company_url'],
              location: job['location'],
              salary: job['salary'],
              remote: job['remote'],
              available: job['available']
            }}
            validationSchema={SignupSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form>
                <Field name="title">
                  {({ field }: any) => (
                    <label className="mt-2 block">
                      <span className="text-gray-700">Title</span>
                      <input
                        {...field}
                        type="text"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        placeholder=""
                      />
                      {errors.title && touched.title ? (
                        <div>{errors.title}</div>
                      ) : null}
                    </label>
                  )}
                </Field>

                <Field name="company_name">
                  {({ field }: any) => (
                    <label className="mt-2 block">
                      <span className="text-gray-700">company_name</span>
                      <input
                        {...field}
                        type="text"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        placeholder=""
                      />
                      {errors.company_name && touched.company_name ? (
                        <div>{errors.company_name}</div>
                      ) : null}
                    </label>
                  )}
                </Field>

                <Field name="company_url">
                  {({ field }: any) => (
                    <label className="mt-2 block">
                      <span className="text-gray-700">company_url</span>
                      <input
                        {...field}
                        type="text"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        placeholder=""
                      />
                      {errors.company_url && touched.company_url ? (
                        <div>{errors.company_url}</div>
                      ) : null}
                    </label>
                  )}
                </Field>

                <Field name="location">
                  {({ field }: any) => (
                    <label className="mt-2 block">
                      <span className="text-gray-700">location</span>
                      <input
                        {...field}
                        type="text"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        placeholder=""
                      />
                      {errors.location && touched.location ? (
                        <div>{errors.location}</div>
                      ) : null}
                    </label>
                  )}
                </Field>

                <Field name="salary">
                  {({ field }: any) => (
                    <label className="mt-2 block">
                      <span className="text-gray-700">salary</span>
                      <input
                        {...field}
                        type="number"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        placeholder=""
                      />
                      {errors.salary && touched.salary ? (
                        <div>{errors.salary}</div>
                      ) : null}
                    </label>
                  )}
                </Field>

                <Field name="remote">
                  {({ field }: any) => (
                    <div className="mt-2 block">
                      <div className="mt-2">
                        <div>
                          <label className="inline-flex items-center">
                            <input
                              {...field}
                              type="checkbox"
                              className="border-gray-300 border-2 text-black focus:border-gray-300 focus:ring-black"
                            />
                            <span className="ml-2">Remote</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  )}
                </Field>

                <Field name="available">
                  {({ field }: any) => (
                    <div className="mt-2 block">
                      <div className="mt-2">
                        <div>
                          <label className="inline-flex items-center">
                            <input
                              {...field}
                              type="checkbox"
                              className="border-gray-300 border-2 text-black focus:border-gray-300 focus:ring-black"
                              checked
                            />
                            <span className="ml-2">available</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  )}
                </Field>

                <button className="mt-2 bg-sky-800 hover:bg-sky-600 text-white px-3 py-3 rounded-md shadow-sm" type="submit">Submit</button>
              </Form>
            )}
          </Formik>
        )}
      </div>
    </div >
  )
}
