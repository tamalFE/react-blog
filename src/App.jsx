import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { postCategories } from './apiRequest/apiCalls';
import HomePage from './pages/HomePage';
import ByCategoryPage from './pages/ByCategoryPage';
import DetailsPage from './pages/DetailsPage';

export default function App() {
  postCategories();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/byCategory/:categoryID" element={<ByCategoryPage />} />
        <Route path="/details/:postID" element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
