import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer.jsx";
import NavBar from "./components/NavBar.jsx";
import HomePage from './pages/HomePage.jsx';
import CryptoList from './pages/CryptoList.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/list" element={<CryptoList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}