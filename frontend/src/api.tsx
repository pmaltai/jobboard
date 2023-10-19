const baseURL = "http://127.0.0.1:8000"
const apiURL = `${baseURL}/api`

export const API = {
  auth: {
    login: `${baseURL}/dj-rest-auth/login/`,
    logout: `${baseURL}/dj-rest-auth/logout/`,
    signup: `${baseURL}/dj-rest-auth/registration/`,
    verifyEmail: `${baseURL}/dj-rest-auth/registration/verify-email/`,
  },
  jobs: {
    list: `${apiURL}/jobs/`,
    create: `${apiURL}/create-job/`,
    retrieve: (id: any) => `${apiURL}/jobs/${id}/`,
    update: (id: any) => `${apiURL}/jobs/${id}/update/`,
    delete: (id: any) => `${apiURL}/jobs/${id}/delete/`,
  }
}
