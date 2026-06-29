import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeScreen } from "./components/screens/HomeScreen";
import { CvScreen } from "./components/screens/CvScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/cv" element={<CvScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;