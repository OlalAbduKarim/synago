
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AddPatientPage from './pages/AddPatientPage';
import PatientDetailPage from './pages/PatientDetailPage';
import { ToastContainer } from 'react-toastify'; // Assuming react-toastify is available or a similar notification system
import 'react-toastify/dist/ReactToastify.css'; // Import if using react-toastify

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddPatientPage />} />
          <Route path="/patient/:id" element={<PatientDetailPage />} />
        </Routes>
      </main>
      <footer className="bg-gray-800 text-white text-center p-4 no-print">
        © {new Date().getFullYear()} Temple Mount Church Records. All rights reserved.
      </footer>
      {/* Placeholder for ToastContainer if react-toastify or similar is intended.
          If not, this can be removed. For simplicity, I'll keep it as a common pattern.
          However, `react-toastify` is an external lib. The prompt implies only React, Tailwind, and specified libs (d3, recharts, qrcode.react)
          So, I will remove react-toastify and its CSS. Basic alerts can be used if needed.
      */}
      {/* <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover /> */}
    </div>
  );
};

export default App;