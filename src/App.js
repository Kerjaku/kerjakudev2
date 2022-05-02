import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";

//Import all links needed throughout the app
import Home from './pages/home.js';
import EtrainingHome from './pages/etrainingHome.js'
import ModuleHome from './pages/module-home.js'
import ModuleBase from './pages/module-base.js'
import JobBoard from "./pages/jobboard.js"

class App extends Component {
    render() {
        window.localStorage.setItem("module", JSON.stringify(null))
        window.localStorage.setItem("loggedIn", JSON.stringify("false"))
        return (
            <Router>
                <Routes>
                    <Route path="/kerjakudev2" element={<Home />} />
                    <Route path="/kerjakudev2/etrainingHome" element={<EtrainingHome />} />
                    <Route path="/kerjakudev2/modulehome" element={<ModuleHome />} />
                    <Route path="/kerjakudev2/modulebase" element={<ModuleBase />} />
                    <Route path="/kerjakudev2/jobboard" element={<JobBoard />} />
                </Routes>
            </Router>
        );
    }
}

export default App;