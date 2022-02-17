import './App.css';
import Home from './pages/home.js';
import EtrainingHome from './pages/etrainingHome.js'
import ModuleHome from './pages/module-home.js'
import ModuleBase from './pages/module-base.js'

import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/kerjakudev2" element={<Home />} />
        <Route path="/kerjakudev2/etrainingHome" element={<EtrainingHome />} />
        <Route path="/kerjakudev2/modulehome" element={<ModuleHome />} />
        <Route path="/kerjakudev2/modulebase" element={<ModuleBase />} />

     </Routes>
    </Router>
  );
}

export default App;