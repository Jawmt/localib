
import './App.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Locataire from './pages/Locataire';
import Vehicule from './pages/Vehicule';

function App() {
  return ( 
    <>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/locataire" element={<Locataire/>} />
          <Route path="/vehicule" element={<Vehicule/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
