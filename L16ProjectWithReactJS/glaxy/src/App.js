import {  BrowserRouter as Router,
  Route,
  Routes } from 'react-router-dom';

// import React from 'react';
import './App.css';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Pricing from './Pages/Pricing/Pricing';
import Training from './Pages/Training/Training';
import ScrollToTop from './Components/ScrollToTop';

function App() {
  return (
    <div className="App">
        <Router>
        <ScrollToTop >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/training" element={<Training />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
          </ScrollToTop>
    </Router>
      </div>
  );
}

export default App;












// import { useContext } from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Header from './Components/Header';
// import Home from './Pages/Home';
// import JobDetails from './Pages/JobDetails';
// import ApplicationForm from './components/ApplicationForm';
// import Applications from './Pages/Applications';
// import ApplicationSummary from './components/ApplicationSummary';
// import Profile from './Pages/Profile';
// import { UserContext } from './context/UserContext';

// function App() {
//   const { user } = useContext(UserContext);
  
//   return (
//     <div className="app">
//       <Header user={user} />
//       <main>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/job/:id" element={<JobDetails />} />
//           <Route path="/apply/:id" element={<ApplicationForm />} />
//           <Route path="/applications" element={<Applications />} />
//           <Route path="/applications/:id" element={<ApplicationSummary />} />
//           <Route path="/profile" element={<Profile />} />
//         </Routes>
//       </main>
//     </div>
//   );
// }

// export default App;
