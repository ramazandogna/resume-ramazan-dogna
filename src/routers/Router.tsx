import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Freelance from '../pages/Freelance';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/freelance" element={<Freelance />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
