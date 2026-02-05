import HomePage from "./pages/HomePage";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import AdminPanel from "./pages/Admin";

const App = () => {
  
  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage />}
      />
      <Route path="/login" element={<Login />} />
      <Route path="/adminPanel" element={<AdminPanel />} />
    </Routes>
  );
};

export default App;
