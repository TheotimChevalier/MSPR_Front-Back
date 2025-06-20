import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import RadarChartPage from "./pages/RadarChartPage";
import './App.css';
import keycloak from 'frontend/src/Auth/keycloak.js';

function App() {
  const [keycloakInitialized, setKeycloakInitialized] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    keycloak.init({ onLoad: 'login-required' }).then(auth => {
      setAuthenticated(auth);
      setKeycloakInitialized(true);
    }).catch(() => {
      setAuthenticated(false);
      setKeycloakInitialized(true);
    });
  }, []);

  if (!keycloakInitialized) {
    return <div>Chargement...</div>;
  }

  if (!authenticated) {
    return <div>Non authentifié</div>;
  }

  // Si authentifié, on rend l'app avec routes et header
  return (
    <Router>
      <Header />
      <div>
        <h1>Bienvenue {keycloak.tokenParsed?.preferred_username}</h1>
        <button onClick={() => keycloak.logout()}>Se déconnecter</button>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/radar" element={<RadarChartPage />} />
        {/* Ajoute d'autres pages ici */}
      </Routes>
    </Router>
  );
}

export default App;
