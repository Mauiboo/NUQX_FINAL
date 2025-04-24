import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage"; 
import EnrollmentMain from "./Pages/EnrollmentMain"; 
import AccountingMain from "./Pages/AccountingMain"; 
import Payment from "./Accounting/Payment";
import QueueNum from "./Pages/QueueNum"; 
import Application from "./Admission/Application"; 
import Inquiry from "./Admission/Inquiry"; 
import EnrollmentForm from "./Registrar/EnrollmentForm"; 
import RequestDocument from "./Registrar/RequestDocument";
import AdmissionMain from "./Pages/AdmissionMain";

function KioskApp() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/admission" element={<AdmissionMain />} />
      <Route path="/enrollment" element={<EnrollmentMain />} />
      <Route path="/accounting" element={<AccountingMain />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/queue-num" element={<QueueNum />} />
      <Route path="/application" element={<Application />} />
      <Route path="/inquiry" element={<Inquiry />} />
      <Route path="/enrollment-form" element={<EnrollmentForm />} />
      <Route path="/request-document" element={<RequestDocument />} />
    </Routes>
  );
}

export default KioskApp;