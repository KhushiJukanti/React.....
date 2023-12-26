// App.js

import React, { Component } from 'react';


class ContactsRegisterApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
    isRegistered: false,
    isLoggedIn: false,
    contacts: [
      { id: 1, name: 'John Doe', phone: '1234567890', email: 'john.doe@example.com' },
      // ...other predefined contacts
    ],
    selectedContact: null,
    newContact: { name: '', phone: '', email: '' },
    };
  }

  handleRegisterClick = () => {
    this.setState({ isRegistered: true });
  };

  handleLoginClick = () => {
    this.setState({ isLoggedIn: true });
  };

  handleCreateContact = () => {
    const { newContact, contacts } = this.state;
    const newContactList = [
      ...contacts,
      { id: contacts.length + 1, ...newContact },
    ];
    this.setState({ contacts: newContactList, newContact: { name: '', phone: '', email: '' } });
  };

  handleInputChange = (field, value) => {
    this.setState((prevState) => ({
      newContact: {
        ...prevState.newContact,
        [field]: value,
      },
    }));
  };

  handleContactClick = (contact) => {
    this.setState({ selectedContact: contact });
  };

  handleEditContact = () => {
    // Implement logic for editing a contact
    console.log('Edit contact logic goes here');
  };

  handleDeleteContact = () => {
    // Implement logic for deleting a contact
    console.log('Delete contact logic goes here');
  };

  handleClosePrompt = () => {
    this.setState({ selectedContact: null });
  };

  render() {
    const { isRegistered, isLoggedIn, contacts, selectedContact, newContact } = this.state;

    return (
      <div>
        {!isRegistered && (
          <button onClick={this.handleRegisterClick}>Register</button>
        )}

        {!isLoggedIn && isRegistered && (
          <button onClick={this.handleLoginClick}>Login</button>
        )}

        {isLoggedIn && (
          <div>
            <button onClick={() => this.handleCreateContact()}>Create Contact</button>

            <div id="contactList">
              {contacts.map((contact) => (
                <div key={contact.id} className="contact" onClick={() => this.handleContactClick(contact)}>
                  <h2>{contact.name}</h2>
                  <p>Phone: {contact.phone}</p>
                  <p>Email: {contact.email}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedContact && (
          <div className="contactPrompt">
            <h2>{selectedContact.name}</h2>
            <p>Phone: {selectedContact.phone}</p>
            <p>Email: {selectedContact.email}</p>
            <button onClick={this.handleEditContact}>Edit</button>
            <button onClick={this.handleDeleteContact}>Delete</button>
            <button onClick={this.handleClosePrompt}>Close</button>
          </div>
        )}
        
        {isLoggedIn && (
          <div>
            <h2>Create Contact</h2>
            <label>Name:</label>
            <input type="text" value={newContact.name} onChange={(e) => this.handleInputChange('name', e.target.value)} />
            <label>Phone:</label>
            <input type="text" value={newContact.phone} onChange={(e) => this.handleInputChange('phone', e.target.value)} />
            <label>Email:</label>
            <input type="text" value={newContact.email} onChange={(e) => this.handleInputChange('email', e.target.value)} />
            <button onClick={this.handleCreateContact}>Create Contact</button>
          </div>
        )}
      </div>
    );
  }
}

export default ContactsRegisterApp;
