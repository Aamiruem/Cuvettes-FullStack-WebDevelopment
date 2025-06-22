
// import App from './App';
import './styles/global.css';
import './styles/header.css';
import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import JobDetails from './pages/JobDetails';
import ApplicationForm from './components/ApplicationForm';
import ApplicationList from './pages/ApplicationList';
import ApplicationSummary from './components/ApplicationSummary';
import Profile from './pages/Profile';
import { UserContext } from './context/UserContext';
import Header from './components/Header';
function App() {
  const { user } = useContext(UserContext);
  
  return (
    <div className="app">
      <Header user={user} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/job/:id" element={<JobDetails />} />
          <Route path="/apply/:id" element={<ApplicationForm />} />
          <Route path="/applications" element={<ApplicationList />} />
          <Route path="/applications/:id" element={<ApplicationSummary />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
