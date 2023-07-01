import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Loader from "./components/globals/Loader";
import Donate from "./screens/individuals/Donate";
import PrivateRoutes from "./components/globals/PrivateRoutes";
import HomePage from "./screens/HomePage";
import SignUpCard from "./components/auth/Signup";
import SignInCard from "./components/auth/SignIn";

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUpCard />} />
          <Route path="/signin" element={<SignInCard />} />
          <Route path="/*" element={<PrivateRoutes />}>
            <Route path="donate" element={<Donate />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
