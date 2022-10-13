
import './App.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Locataire from './pages/Locataire';

function App() {
  return ( 
    <>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/locataire" element={<Locataire/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
