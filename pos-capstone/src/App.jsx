import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import Login from './page/Login/Login';
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import Landing from './page/Landing/Landing';
import Graph from './element/Graph/Graph';



function App() {


  return (
    <>

      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Graph />} />

        </Routes>
      </Router>

    </>

  )
}

export default App
