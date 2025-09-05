import { HashRouter as Router } from 'react-router-dom';

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
import Whey_protien_phn from './components/Whey_protien_phn';
import Whey_protien_isolate from './components/Whey_protien_isolate';
import Pea_protien_isolate from './components/Pea_protien_isolate';
import Pea_protien from './components/Pea_protien';
import Micellar_Casein from './components/Micellar_Casein';
import All_recovery from './components/All_Recovery';
import High_protienDiet from './components/High_protienDiet';
import Protein_Porridge from './components/Protein_Porridge';
import Total_mass_matrix from './components/Total_mass_matrix';
import Creatine_monohydrate from './components/Creatine_monohydrates';
import Omega3 from './components/Omega3';
import Nitroboost_pre from './components/Nitroboost_pre';
import Omega from './components/Omega';
import Multivitamin_Ultra from './components/Multivitamin_Ultra';
import Vitamin_d3 from './components/Vitamin_d3';
import Zinc_And_Magnesium from './components/Zinc_And_Magnesium';
import Thermopro from './components/Thermopro';
import Weight_loss from './components/Weight_loss';
import Cla from './components/Cla';
import Loader from './components/Loader';
import Cart from './components/Cart';
import Shop from './components/Shop';
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
        <Route path="/Whey_protien_phn" element={<Whey_protien_phn />} />
        <Route path="/Whey_protien" element={<Whey_protien/>} />
        <Route path="/Whey_protien_isolate" element={<Whey_protien_isolate/>} />
        <Route path="/Pea_protien_isolate" element={<Pea_protien_isolate/>} />
        <Route path="/Pea_protien" element={<Pea_protien/>} />
        <Route path="/Micellar_casein" element={<Micellar_Casein/>} />
        <Route path="/All_recovery" element={<All_recovery/>} />
        <Route path="/Protein_Porridge" element={<Protein_Porridge/>} />
        <Route path="/Total_mass_matrix" element={<Total_mass_matrix/>} />
        <Route path="/High_protienDiet" element={<High_protienDiet/>} />
        <Route path="/Creatine_monohydrate" element={<Creatine_monohydrate/>} />
        <Route path="/Omega3" element={<Omega3/>} />
        <Route path="/Nitroboost_pre" element={<Nitroboost_pre/>} />
        <Route path="/Omega" element={<Omega/>} />
        <Route path="/Multivitamin_Ultra" element={<Multivitamin_Ultra/>} />
        <Route path="/Vitamin_d3" element={<Vitamin_d3/>} />
        <Route path="/Zinc_And_Magnesium" element={<Zinc_And_Magnesium/>} />
        <Route path="/Thermopro" element={<Thermopro/>} />
        <Route path="/Weight_loss" element={<Weight_loss/>} />
        <Route path="/Cla" element={<Cla/>} />
        <Route path="/Cart" element={<Cart/>} />
        <Route path="/Shop" element={<Shop/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
