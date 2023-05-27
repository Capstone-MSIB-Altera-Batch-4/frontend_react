import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import Login from './page/Login/Login';
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import Landing from './page/Landing/Landing';
import Dashboard from './page/Dashboard/Dashboard';
import Products from './page/Dashboard/Products';


function App() {

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Kaisei+Opti:wght@400;500;700&family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Landing />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/Product" element={<Products/>}/>
          </Routes>
        </Router>

    </>

  )
}

export default App
