import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';
import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './DepartmentHeadApp.css';
import Header from './components/Header';
import SideBar from './components/SideBar'; 
import Dashboard from './pages/Dashboard';
import Reports from './pages/Reports';
import Services from './pages/Services';
import Staff from './pages/Staff';
import Settings from './pages/Settings';
import Transaction from './pages/Transaction';

function App() {
  return (
    <div class Name='flex h-screen bg-white text-gray-900 overflow-hidden'>
      {/* BG */}
      <div className='fixed inset-0 z-0'>
        <div className='absolute inset-0 bg-white opacity-100' />
      </div>

      <Header />
      <SideBar /> 

      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/services" element={<Services />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/transaction" element={<Transaction />} />
      </Routes>
    </div>
  );
}

export default App;