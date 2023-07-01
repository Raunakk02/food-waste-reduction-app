import * as React from "react";
import { Route, Routes } from "react-router-dom";
import { RequireAuth } from "./components/globals/ProtectedRoutes";
import HomeScreen from "./screens/HomeScreen";
import Loader from "./components/globals/Loader";
import PageNotFound from "./screens/errorPages/PageNotFound";

function App() {
  return (
    <>
      <React.Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          {/* <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} /> */}

          <Route path="/*" element={<RequireAuth />}>
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </React.Suspense>
    </>
  );
}

export default App;
