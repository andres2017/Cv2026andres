import React from "react";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import { Toaster } from "sonner";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <LanguageProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </HashRouter>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#161b22',
            border: '1px solid #1e2a3a',
            color: '#c9d1d9',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '13px',
          },
        }}
      />
    </LanguageProvider>
  );
}

export default App;
