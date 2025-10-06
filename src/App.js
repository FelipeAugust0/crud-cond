import React, { useState } from "react";
import "./App.css";

// Importando componentes
import Login from "./components/Login.js";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (username, password) => {
    // Simulação de autenticação
    if (username === "admin" && password === "123") {
      setIsLoggedIn(true);
    } else {
      alert("Usuário ou senha inválidos!");
    }
  }

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }
}

export default App;
