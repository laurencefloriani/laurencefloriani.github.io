import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {HashRouter, Route, Routes} from "react-router-dom";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Activities from "./components/Activities";
import Projects from "./components/Projects";

ReactDOM.render(
    <React.StrictMode>
        <HashRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/education" element={<Education />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/activities" element={<Activities />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </HashRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
