import React from 'react';
import { createRoot } from "react-dom/client";
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css";
import "font-awesome/css/font-awesome.css";

const rootElement = document.getElementById('app-root');
createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
