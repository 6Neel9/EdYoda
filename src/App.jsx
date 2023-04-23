import "./App.css";
import { Routes, Route } from "react-router-dom";
import { FirstComponent } from './components/FirstComponent';
import ErrorPage from "./components/ErrorPage";
import { ModuleComponent } from "./components/ModuleComponent";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<FirstComponent/>} />
        <Route path="/modules" element={<ModuleComponent/>} />
        <Route path="/instructors" element={<ErrorPage/>} />
      </Routes>
    </div>
  );
}

export default App;
