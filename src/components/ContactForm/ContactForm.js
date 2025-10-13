import React, { useEffect, useState } from "react";
import './ContactForm.css';

function ContactForm({ onSave, contactToEdit }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    if (contactToEdit) {
      setName(contactToEdit.name);
      setPhone(contactToEdit.phone);
    } else {
      setName('');
      setPhone('');
    }
  }, [contactToEdit]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !phone) {
            alert('Por favor, preencha todos os campos');
            return;
        }
        onSave({ id: contactToEdit ? contactToEdit.id : null, name, phone });
        setName('');
        setPhone('');
    }

    return (
        <div>
            <h2>{contactToEdit ? 'Alterar contato' : 'Cadastrar novo contato'}</h2>
            <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)}/>
                    <input type="text" placeholder="Telefone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                    <button type="submit">Salvar</button>
            </form>
        </div>
    );
}  
export default ContactForm;
