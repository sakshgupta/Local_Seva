import { Route, Routes } from "react-router-dom";
import ServicePage from "./components/AvailableServices/ServicePage";
import BookingDone from "./components/BookingDone/BookingDone";
import Footer from "./components/Global Components/Footer/Footer";
import Navbar from "./components/Global Components/Navbar/Navbar";
import Homepage from "./components/Homepage/Homepage";
import LogIn from "./components/Register/LogIn";
import Otp from "./components/Register/Otp";
import Signup from "./components/Register/Signup";
import RegisterasProfessional from "./components/RegisterasProfessional/RegisterasProfessional";
import Service from "./components/ServicePacks/Services/Service";
import "./index.css";
import ProfessionalLogin from "./components/RegisterasProfessional/ProfessionRegister/ProfessionalLogin";
import ProfessionalRegister from "./components/RegisterasProfessional/ProfessionRegister/ProfessionalRegister";
import ProfessionalOTP from "./components/RegisterasProfessional/ProfessionRegister/ProfessionalOTP";

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
      </Routes>
      {/* Footer */}
      <Routes>
        <Route path="/" element={<Footer />} />
      </Routes>

      <Routes>
        <Route
          path="/handyman/professionalLogin"
          element={<ProfessionalLogin />}
        />
      </Routes>
      <Routes>
        <Route
          path="/handyman/professionalSignup"
          element={<ProfessionalRegister />}
        />
      </Routes>

      <Routes>
        <Route path="/handyman/professionalOTP" element={<ProfessionalOTP />} />
      </Routes>
    </>
  );
}

export default App;
