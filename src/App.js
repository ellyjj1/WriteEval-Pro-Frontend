import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ChatGPTComponent from './Pages/Evaluator/Evaluator';
import Register from "./Components/Register.js";
import Login from "./Components/Login.js";
import Home from "./Pages/Homepage/Home.js";
import ContactUs from "./Pages/ContactUs.js";
import Navbar    from "./Components/Navbar";
import Footer from "./Components/Footer";
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/contactus" element={<ContactUs/>}/>

                    <Route path="/evaluate" element={<ChatGPTComponent/>}/>
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
