import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home/index.tsx';
import ListaServicos from './pages/ListaServicos/index.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <Router>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/listaServicos' element={<ListaServicos/>} /> 
        </Routes>                   
      </Router>
  </React.StrictMode>,
)
