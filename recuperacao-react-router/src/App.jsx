import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

import HomeScreen from '../screens/HomeScreen.jsx';
import Sobre from '../screens/Sobre.jsx';
import Contato from '../screens/Contato.jsx';
import Projetos from '../screens/Projetos.jsx';
import DetalheProjeto from '../screens/DetalheProjeto.jsx';

import './App.css';

export function App() {
  return (
    <Router>
      <Header />
      <main className="content">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/projetos" element={<DetalheProjeto />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;