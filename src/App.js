import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/app.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Practice from "./pages/Practice";
import JobPortal from "./pages/JobPortal";
import MobileNav from "./components/MobileNav";
import Mentorship from "./pages/Mentorship";
import Compete from "./pages/Compete";
import Courses from "./pages/Courses";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/mentor" element={<Mentorship />} />
        <Route path="/job-portal" element={<JobPortal />} />

        <Route path="/compete" element={<Compete />} />
      </Routes>
      <Footer />
      <MobileNav />
    </Router>
  );
}

export default App;
