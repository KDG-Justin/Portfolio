import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeScreen } from "./components/screens/HomeScreen";
import { CvScreen } from "./components/screens/CvScreen";
import { AboutScreen } from "./components/screens/about/AboutScreen";
import { WindowsProvider } from "./context/WindowsContextProvider";
import { SkillsScreen } from "./components/screens/SkillsScreen";

function App() {
  return (
    <WindowsProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/cv" element={<CvScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/skills" element={<SkillsScreen />} />
      </Routes>
    </BrowserRouter>
    </WindowsProvider>
  );
}

export default App;