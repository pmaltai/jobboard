import { Routes, Route   } from "react-router-dom";
import { Layout } from "./components";

export default function App() {
  return (
    <div>
      <h1>Basic Example</h1>
      <Layout />
      <div>
      <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />
      </Routes>
      </div>
    </div>
  );
}


function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

