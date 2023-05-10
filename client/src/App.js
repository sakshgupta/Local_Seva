import { Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ServicePage from "./components/AvailableServices/ServicePage";
import BookingDone from "./components/BookingDone/BookingDone";
import Footer from "./components/Global Components/Footer/Footer";
import Navbar from "./components/Global Components/Navbar/Navbar";
import Homepage from "./components/Homepage/Homepage";
import Completion from "./components/Payment/Completion";
import Payment from "./components/Payment/Payment";
import LogIn from "./components/Register/LogIn";
import Otp from "./components/Register/Otp";
import Signup from "./components/Register/Signup";
import Dashboard from "./components/RegisterasProfessional/Dashboard/Dashboard";
import ProfessionalLogin from "./components/RegisterasProfessional/ProfessionRegister/ProfessionalLogin";
import ProfessionalOTP from "./components/RegisterasProfessional/ProfessionRegister/ProfessionalOTP";
import ProfessionalRegister from "./components/RegisterasProfessional/ProfessionRegister/ProfessionalRegister";
import ProfessionalRegisterSecond from "./components/RegisterasProfessional/ProfessionRegister/ProfessionalRegisterSecond";
import RegisterasProfessional from "./components/RegisterasProfessional/RegisterasProfessional";
import Completed from "./components/RegisterasProfessional/ServiceTime/Completed";
import Map from "./components/RegisterasProfessional/ServiceTime/Map";
import PaymentBill from "./components/RegisterasProfessional/ServiceTime/PaymentBill";
import Service from "./components/ServicePacks/Services/Service";
import ServiceProvider from "./components/ServiceProvider/ServiceProvider";
import "./index.css";
import HandymanProfile from "./components/RegisterasProfessional/Dashboard/HandymanProfile";

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
                {/* User Login and signup */}
                <Route path="/user/login" element={<LogIn />} />
                <Route path="/user/signup" element={<Signup />} />
                <Route path="/user/signup/verify" element={<Otp />} />
                {/* Handyman */}
                <Route path="/handyman/dashboard" element={<Dashboard />} />
                <Route path="/handyman/profile" element={<HandymanProfile />} />
                <Route
                    path="/handyman/register"
                    element={<RegisterasProfessional />}
                />
                <Route path="/handyman/login" element={<ProfessionalLogin />} />
                <Route
                    path="/handyman/signup"
                    element={<ProfessionalRegister />}
                />
                <Route
                    path="/handyman/signup/verify"
                    element={<ProfessionalRegisterSecond />}
                />
                {/* Services */}
                <Route path="/services/:serviceName" element={<Service />} />
                <Route
                    path="/services/serviceProvider"
                    element={<ServiceProvider />}
                />
                <Route path="/services/servicePage" element={<ServicePage />}
                />
                {/* Billing and stuff */}
                <Route path="/user/bookingsummary" element={<BookingDone />} />
                <Route path="/handyman/workdone" element={<Completed />} />
                <Route path="/handyman/paymentBill" element={<PaymentBill />} />
                {/* Job Start Otp */}
                <Route path="/handyman/jobstartotp" element={<Map />} />
                {/* Payment */}
                <Route path="/user/payment" element={<Payment />} />
                <Route path="/handyman/confirmation" element={<Completion />} />

                {/* <Route path="/handyman/verify" element={<ProfessionalOTP />} /> */}
            </Routes>
            {/* Footer */}
            <Routes>
                <Route path="/" element={<Footer />} />
            </Routes>
            <ToastContainer
                autoClose={5000}
                theme="colored"
                newestOnTop={true}
            />
        </>
    );
}

export default App;
