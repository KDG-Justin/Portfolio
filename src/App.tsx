import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeScreen } from "./components/screens/HomeScreen";
import { CvScreen } from "./components/screens/CvScreen";
import { AboutScreen } from "./components/screens/AboutScreen";
import { WindowsProvider } from "./context/WindowsContextProvider";

function App() {
  return (
    <WindowsProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/cv" element={<CvScreen />} />
        <Route path="/about" element={<AboutScreen />} />
      </Routes>
    </BrowserRouter>
    </WindowsProvider>
  );
}

export default App;