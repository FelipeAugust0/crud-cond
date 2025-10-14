import React, { useState } from "react";
import Login from "./components/Login/Login.js";
import Menu from "./components/Menu/Menu.js";
import ContactList from "./components/ContactList/ContactList.js";
import ContactForm from "./components/ContactForm/ContactForm.js";
import Welcome from "./components/Welcome/Welcome.js";

import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeScreen, setActiveScreen] = useState("Welcome");
  const [contacts, setContacts] = useState([
    { id: 1, name: "Felipe Augusto da Silva", phone: "16 991785082" },
    { id: 2, name: "Beatriz Oliveira", phone: "16 991846282" },
  ]);
  const [contactToEdit, setContactToEdit] = useState(null);

  function handleLogin(userName, password) {
    if (userName === "admin" && password === "123") {
      setIsLoggedIn(true);
    } else {
      alert("Usuário ou senha inválida!!!");
    }
  }

  const handleSaveContact = (contact) => {
    if(contact.id) { 
      // Se o contato já tem ID, é uma atualização
      setContacts(contacts.map(c => c.id === contact.id ? contact : c));
      alert('Contato alterado com sucesso!!')
    } else {
      // Cadastra-se um contato novo
      contact.id = Date.now();
      setContacts([...contacts, contact])
      alert("Contato cadastrado com sucesso!");
    }

    setActiveScreen('list');
    setContactToEdit(null);
  };

  const handleDeleteContact = (id) => {
    setContacts(contacts.filter(c => c.id !== id));
    alert('Contato removido com sucesso!');
  };

  const startEdit = (contact) => {
    setContactToEdit(contact);
    setActiveScreen('form');
  };


  const showCreateForm = () => {
    setContactToEdit(null);
    setActiveScreen('form');
  };

  const handleNavigate = (screen) => {
    if(screen === 'logout') {
      setIsLoggedIn(false);
    } else {
      setActiveScreen(screen);
    }
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="page">
      <Menu onNavigate={handleNavigate} onCreate={showCreateForm} />
      <main className="content">
        {activeScreen === "Welcome" && <Welcome />}
        {activeScreen === "list" && (
          <ContactList
            contacts={contacts}
            onEdit={startEdit}
            onDelete={handleDeleteContact}
          />
        )}
        {activeScreen === "form" && (
          <ContactForm
            contactToEdit={contactToEdit}
            onSave={handleSaveContact}
          />
        )}
      </main>
    </div>
  );
}

export default App;