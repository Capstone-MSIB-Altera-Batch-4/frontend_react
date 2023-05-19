import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import LandingPage from './page/Landing/Landing';
import Login from './page/Login/Login';
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';


function App() {


  return (
    <>

      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<LandingPage />} />

        </Routes>
      </Router>

    </>

  )
}

export default App
