import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Loader from './components/globals/Loader';
import Donate from './components/pages/private/Donate';
import PrivateRoutes from './components/pages/PrivateRoutes';
import HomePage from './components/pages/public/HomePage';

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/*' element={<PrivateRoutes />}>
            <Route path='donate' element={<Donate />}/>
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
