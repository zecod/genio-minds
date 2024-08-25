import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./app/pages/home/Home";
import { Dashoard } from "./app/pages/app/dashboard/Dashoard";
import { Login } from "./app/pages/auth/login/Login";
import { NewProject } from "./app/pages/app/dashboard/components/tabs/overview/NewProject";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app" element={<Dashoard />} />
        <Route path="/app/:section" element={<Dashoard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/test" element={<NewProject />} />
      </Routes>
    </Router>
  );
};

export default App;
