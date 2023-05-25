import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import Login from './page/Login/Login';
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import Landing from './page/Landing/Landing';
import Dashboard from './page/Dashboard/Dashboard';


function App() {


  return (
    <>

      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>

    </>

  )
}

export default App
