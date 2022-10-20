
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import Vehicule from './features/vehicule/pages/Vehicule';
import Locataire from './features/locataire/page/Locataire';
import Header from './shared/component/Header';
import LocationDesVehicules from './features/gestionDesLocations/page/LocationDesVehicules';
import LocationVehiculeLocataire from './features/locationVehiculeLocataire/page/LocationVehiculeLocataire';

function App() {
  return ( 
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/locataire" element={<Locataire/>} />
          <Route path="/vehicule" element={<Vehicule/>} />
          <Route path="/LocationVehicules" element={<LocationDesVehicules/>}/>
          <Route path="/gestionDesLocations" element={<LocationVehiculeLocataire />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
