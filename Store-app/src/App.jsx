import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import HeroCarousel from './components/Crousel';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Protien from './components/Protien_powder';
import Weight from './components/Weight_Gainer';
import Pre_Workout from './components/Pre_Workout';
import Whey_protien from './components/Whey_protien';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carousel" element={<HeroCarousel />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Protien_powder" element={<Protien />} />
        <Route path="/Weight_gainer" element={<Weight />} />
        <Route path="/Pre_workout" element={<Pre_Workout />} />
        <Route path="/Whey_protien" element={<Whey_protien />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
