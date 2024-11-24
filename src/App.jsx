import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import SpecialtiesPage from "./pages/SpecialtiesPage ";
import ShowAllDrs from "./pages/ShowAllDrs";
import "./App.css";
import LogIn from "./pages/Login.jsx";
import SignUp from "./pages/SignUp";
import ConsultationBooking from "./pages/ConsultationBooking";
import UserProfile from "./pages/UserProfile";
import ShowHaridwardrs from "./pages/ShowHaridwardrs.jsx";
import DoctorProfile from './pages/DoctorProfile.jsx'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/specialties" element={<SpecialtiesPage />} />
        <Route path="/showalldoctors" element={<ShowAllDrs />} />
        <Route path="/showalldoctorsinHaridwar" element={<ShowHaridwardrs/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/consultnow" element={<ConsultationBooking />}></Route>
        <Route path="/drprofile" element={<DoctorProfile />}></Route>

      </Routes>
    </Layout>
  );
}

export default App;
