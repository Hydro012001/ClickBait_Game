import "./App.css";
import ClickScreen from "./Components/clickscreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Signup from "./Pages/Signup";
import Level from "./Components/level";
import NotAllowed from "./Components/notAllowed";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="/error" element={<NotAllowed />} />
        <Route path="signup" element={<Signup />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<Level />} />
          <Route path=":level" element={<ClickScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
