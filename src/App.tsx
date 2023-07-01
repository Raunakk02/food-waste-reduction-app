import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Loader from "./components/globals/Loader";
import Donate from "./screens/Donate";
import PrivateRoutes from "./components/globals/PrivateRoutes";
import HomePage from "./screens/HomePage";
import SignupCard from "./components/auth/Signup";

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignupCard />} />
          <Route path="/*" element={<PrivateRoutes />}>
            <Route path="donate" element={<Donate />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
