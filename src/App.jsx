import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Login from './components/Login/Login';
import ProductCard from './components/ProductCard/ProductCard';
import SignIp from './components/SignUp/SignIp';
import OurTeam from './components/OurTeam/OurTeam';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ourTeam" element={<OurTeam />} />
        <Route path="/signup" element={<SignIp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/productCard" element={<ProductCard />} />
      </Routes>
    </Router>
  );
}

export default App;
