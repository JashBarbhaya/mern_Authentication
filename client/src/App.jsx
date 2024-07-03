import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Signin from './pages/Signin';
import SignUp from './pages/SignUp';
import Header from './components/Header';

export default function App() {
  return (
  <BrowserRouter>
  { /* header */}
  <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/Signin" element={<Signin />} />
      <Route path="/SignUp" element={<SignUp />} />
      
    </Routes>  

  </BrowserRouter>
  );
}
  