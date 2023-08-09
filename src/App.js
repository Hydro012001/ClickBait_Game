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
        <Route path="ClickBait_Game/login" exact element={<Login />} />
        <Route path="ClickBait_Game/error" exact element={<NotAllowed />} />
        <Route path="ClickBait_Game/signup" exact element={<Signup />} />
        <Route path="ClickBait_Game/dashboard" exact element={<Dashboard />}>
          <Route index exact element={<Level />} />
          <Route path=":level" exact element={<ClickScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
