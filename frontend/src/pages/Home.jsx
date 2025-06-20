import React, { useEffect } from 'react';
import DiabetesPredictor from "../components/DiabetesPredictor";

export default function Home() {
  useEffect(() => {
    document.title = "Prediction Diabete"; 
  }, []); 

  return <DiabetesPredictor />;
}