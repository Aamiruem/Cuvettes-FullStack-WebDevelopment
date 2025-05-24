// import React from 'react'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Home from './Pages/Home';
// import AboutUs from './Pages/AboutUs';
// import Services from './Pages/Service';
// import ContactUs from './Pages/ContactUs';
// import './App.css';

// const App = () => {
//     return (
//         <>
//             <Router>
//                 <div className="App">
//                     <Switch>
//                         <Route exact path="/" component={Home} />
//                         <Route path="/about" component={AboutUs} />
//                         <Route path="/services" component={Services} />
//                         <Route path="/contact" component={ContactUs} />
//                     </Switch>
//                 </div>
//             </Router>
//         </>
//     )
// }
// export default App

















// import React from 'react';
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// import Home from './Pages/Home';
// import About from './Pages/About';
// import Service from './Pages/Service';
// import Contact from './Pages/Contact';
// import './App.css';

// const App = () => {
//     return (
//         <Router>
//             <div className="app-container">
//                 <nav className="navbar">
//                     <div className="nav-brand">YourLogo</div>
//                     <ul className="nav-links">
//                         <li><Link to="/">Home</Link></li>
//                         <li><Link to="/about">About</Link></li>
//                         <li><Link to="/service">Service</Link></li>
//                         <li><Link to="/contact">Contact Us</Link></li>
//                     </ul>
//                 </nav>

//                 <main className="main-content">
//                     <Switch>
//                         <Route exact path="/" component={Home} />
//                         <Route path="/about" component={About} />
//                         <Route path="/service" component={Service} />
//                         <Route path="/contact" component={Contact} />
//                     </Switch>
//                 </main>

//                 <footer className="footer">
//                     <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
//                 </footer>
//             </div>
//         </Router>
//     );
// }

// export default App;










import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Service';
import Contact from './Pages/Contact';
import './App.css';
import { FaGraduationCap } from 'react-icons/fa'; // Importing an education icon from react-icons

const App = () => {
    return (
        <Router>
            <div className="app-container">
                <nav className="navbar">
                    <div className="nav-brand">
                        <FaGraduationCap className="logo-icon" />
                        <span>EduConnect</span>
                        
{/* <img src="/path-to-your-logo.png" alt="EduConnect Logo" className="logo-image" /> */}
                    </div>
                    <ul className="nav-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </nav>

                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>

                <footer className="footer">
                    <FaGraduationCap className="footer-logo" />
                    <p>© {new Date().getFullYear()} EduConnect. All rights reserved.</p>
                </footer>
            </div>
        </Router>
    );
}

export default App;
