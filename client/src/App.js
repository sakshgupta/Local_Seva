import { Route, Routes } from "react-router-dom";
import ServicePage from "./components/AvailableServices/ServicePage";
import BookingDone from "./components/BookingDone/BookingDone";
import Footer from "./components/Global Components/Footer/Footer";
import Navbar from "./components/Global Components/Navbar/Navbar";
import Homepage from "./components/Homepage/Homepage";
import LogIn from "./components/Register/LogIn";
import Otp from "./components/Register/Otp";
import Signup from "./components/Register/Signup";
import WhyPartner from "./components/RegisterasProfessional/WhyPartner";
import Maid from "./components/ServicePacks/Maid/Maid";
import "./index.css";

function App() {
  return (
    <>
      {/* <Routes>
        <Route path="/" element={<Navbar />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/bookingsummary" element={<BookingDone />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/registerasprofessional" element={<WhyPartner />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Footer />} />
      </Routes> */}

      {/* <Homepage />
      <BookingDone />
      <LogIn />
      <Signup />
      <Otp />
       <WhyPartner />
      <Footer />
       <ServicePage /> */}

      <Maid />
    </>

    // </>
  );
}

export default App;
