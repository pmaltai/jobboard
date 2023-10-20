import axios from "axios";
import {  useState } from "react";
import { API } from "../api";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';


export function Signup() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  function handleSubmit(values: any, { resetForm }:any) {
    setLoading(true)
    axios.post(API.auth.signup, values,)
      .then(res => {
        resetForm()
        setSuccess(true)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const SignupSchema = Yup.object().shape({
    email: Yup.string()
      .required('Required'),
    password1: Yup.string()
      .required('Required'),
    password2: Yup.string()
      .required('Required'),
  });

  return (
    <div>
      {success && "check a mail"}
      {loading && "Loading ..."}
      <div>
        <Formik
          initialValues={{
            email: '',
            password1: '',
            password2: '',
          }}
          validationSchema={SignupSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <Field name="email">
                {({ field }: any) => (
                  <label className="mt-2 block">
                    <span className="text-gray-700">email</span>
                    <input
                      {...field}
                      type="text"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      placeholder=""
                    />
                    {errors.email && touched.email ? (
                      <div>{errors.email}</div>
                    ) : null}
                  </label>
                )}
              </Field>

              <Field name="password1">
                {({ field }: any) => (
                  <label className="mt-2 block">
                    <span className="text-gray-700">password</span>
                    <input
                      {...field}
                      type="password"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      placeholder=""
                    />
                    {errors.password1 && touched.password1 ? (
                      <div>{errors.password1}</div>
                    ) : null}
                  </label>
                )}
              </Field>

              <Field name="password2">
                {({ field }: any) => (
                  <label className="mt-2 block">
                    <span className="text-gray-700">confirm a password</span>
                    <input
                      {...field}
                      type="password"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      placeholder=""
                    />
                    {errors.password2 && touched.password2 ? (
                      <div>{errors.password2}</div>
                    ) : null}
                  </label>
                )}
              </Field>

              <button className="mt-2 bg-sky-800 hover:bg-sky-600 text-white px-3 py-3 rounded-md shadow-sm" type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </div>
    </div >
  )
}
