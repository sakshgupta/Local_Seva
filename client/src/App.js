import { Route, Routes } from "react-router-dom";
import ServicePage from "./components/AvailableServices/ServicePage";
import BookingDone from "./components/BookingDone/BookingDone";
import Footer from "./components/Global Components/Footer/Footer";
import Navbar from "./components/Global Components/Navbar/Navbar";
import Homepage from "./components/Homepage/Homepage";
import LogIn from "./components/Register/LogIn";
import Otp from "./components/Register/Otp";
import Signup from "./components/Register/Signup";
import ProfessionalLogin from "./components/RegisterasProfessional/ProfessionRegister/ProfessionalLogin";
import ProfessionalOTP from "./components/RegisterasProfessional/ProfessionRegister/ProfessionalOTP";
import ProfessionalRegister from "./components/RegisterasProfessional/ProfessionRegister/ProfessionalRegister";
import RegisterasProfessional from "./components/RegisterasProfessional/RegisterasProfessional";
import Service from "./components/ServicePacks/Services/Service";
import "./index.css";
import Dashboard from "./components/RegisterasProfessional/Dashboard/Dashboard";
import ProfessionalRegisterSecond from "./components/RegisterasProfessional/ProfessionRegister/ProfessionalRegisterSecond";

function App() {
  return (
    <>
      {/* Navbar */}
      <Routes>
        <Route path="/" element={<Navbar />} />
      </Routes>
      {/* Rest Routes */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/bookingsummary" element={<BookingDone />} />
        {/* User Login and signup */}
        <Route path="/user/login" element={<LogIn />} />
        <Route path="/user/signup" element={<Signup />} />
        <Route path="/user/signup/verify" element={<Otp />} />
        {/* Handyman Registration */}
        <Route path="/handyman/register" element={<RegisterasProfessional />} />
        <Route path="/services/:serviceName" element={<Service />} />
        <Route path="/handyman/login" element={<ProfessionalLogin />} />
        <Route path="/handyman/signup" element={<ProfessionalRegister />} />
        <Route
          path="/handyman/signupmore"
          element={<ProfessionalRegisterSecond />}
        />
        <Route path="/handyman/verify" element={<ProfessionalOTP />} />
        {/* Add new routes below this */}
        {/* <Route path="..." element={<... />} /> */}
        <Route path="/handyman/dashboard" element={<Dashboard />} />
      </Routes>
      {/* Footer */}
      <Routes>
        <Route path="/" element={<Footer />} />
      </Routes>
    </>
  );
}

export default App;
