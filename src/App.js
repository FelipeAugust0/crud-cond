import React, { useState } from "react";
import "./App.css";

// Importando componentes
import Login from "./components/Login/Login.js";
import Menu from "./components/Menu/Menu.js"
import ContactForm from "./components/ContactForm/ContactForm.js"
import ContactList from "./components/ContactList/ContactList.js"
import Welcome from "./components//Welcome/Welcome.js"

function App() {

  const [ isLoggedIn, setIsLoggedIn ] = useState(false);
  const [ activeScreen, setActiveScreen] = useState("Welcome");
  const [ contacts, setContacts] = useState(
    {id:1, name: "Felipe Augusto", phone: "16 991785082"},
    {id:2, name: "Beatriz Oliveira", phone:"16 994324543"}
  );

  const [contactToEdit, setContactToEdit] = useState(null);

  function handleLogin( userName, password ) {
    if(userName === "admin" && password === "123") {
      setIsLoggedIn(true);
    } else {
      alert("Usuário ou senha inválida!!!")
    }
  };

  const handleSaveContact = (contact) => {}
  const handleDeleteContact = (id) => {}
  const startEdit = (contact) => {}
  const showCreateForm = () => {}
  const handleNavigate = (screen) => {}

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin}/>
  };

  return(
    <div>
      <Menu onNavigate={handleNavigate} onCreate={showCreateForm} />
      <main className='content'>
        {activeScreen === "Welcome" && <Welcome />}
        {activeScreen === "list" && <ContactList contacts={contacts} onEdit={startEdit} onDelete={handleDeleteContact}/>}
        {activeScreen === "form" && <ContactForm contactToEdit={contactToEdit} onSave={handleSaveContact} />}
       
      </main>
    </div>
  )

}

export default App;