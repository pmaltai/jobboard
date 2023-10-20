import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ConfirmEmail } from "./components/ConfirmEmail";
import { JobCreate } from "./components/JobCreate";
import { JobDelete } from "./components/JobDelete";
import { JobDetail } from "./components/JobDetail";
import { JobList } from "./components/JobList";
import { JobUpdate } from "./components/JobUpdate";
import { Login } from "./components/Login";
import { Layout } from "./components/Navbar";
import { Signup } from "./components/Signup";
import { AuthContext } from "./contexts/AuthContext";

export default function App() {
  function PrivateRouter({ children }: any) {
    const { user } = useContext(AuthContext)

    return user ? children : <Navigate replace to={`/login`} />
  }
  return (
    <div>
      <Layout />
      <div className="max-w-4xl mx-auto px-4 py-5">
        <Routes>
          <Route index element={<JobList />} />
          <Route path="/jobs/:id" element={<PrivateRouter><JobDetail /></PrivateRouter>} />
          <Route path="/jobs/:id/update" element={<PrivateRouter><JobUpdate /></PrivateRouter>} />
          <Route path="/jobs/:id/delete" element={<PrivateRouter><JobDelete /></PrivateRouter>} />
          <Route path="/create-job" element={<PrivateRouter><JobCreate /></PrivateRouter>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/accounts/confirm-email/:key" element={<ConfirmEmail />} />
        </Routes>
      </div>
    </div>
  );
}

