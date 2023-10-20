import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../api";
import { AuthContext } from "../contexts/AuthContext";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';


export function Login() {
  const [loading, setLoading] = useState(false)
  const { login } = useContext(AuthContext)
  const navigate = useNavigate()

  function handleSubmit(values: any) {
    setLoading(true)
    axios.post(API.auth.login, values,)
      .then(res => {
        login(res.data.key)
        navigate(`/`)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const SignupSchema = Yup.object().shape({
    email: Yup.string()
      .required('Required'),
    password: Yup.string()
      .required('Required'),
  });

  return (
    <div>
      {loading && "Loading ..."}
      <div>
        <Formik
          initialValues={{
            email: '',
            password: '',
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

              <Field name="password">
                {({ field }: any) => (
                  <label className="mt-2 block">
                    <span className="text-gray-700">password</span>
                    <input
                      {...field}
                      type="password"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      placeholder=""
                    />
                    {errors.password && touched.password ? (
                      <div>{errors.password}</div>
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
