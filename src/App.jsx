import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Login from './components/Login/Login';
import ProductsPage from './components/ProductsPage/ProductsPage';
import SignUp from './components/SignUp/SignUp';
import OurTeam from './components/OurTeam/OurTeam';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ourTeam" element={<OurTeam />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/productsPage" element={<ProductsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
