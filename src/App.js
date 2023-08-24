import { Route, Routes } from 'react-router';
import './App.css';
import About from './routes/About/About';
import Contact from './routes/Contact/Contact';
import Service from './routes/Service/Service';
import Team from './routes/Team/Team';
import Home from './routes/Home/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <div id="App" className="w-screen overflow-hidden relative bg-dark-white">
      <Navbar />
      <Routes>
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Team" element={<Team />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
