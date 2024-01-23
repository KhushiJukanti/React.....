import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function ContactusingReducer() {
    const contactsState = useSelector((state) => state.contacts);
    const dispatch = useDispatch();

    const [newContact, setNewContact] = useState({
        id: null,
        name: "",
        phone: "",
        email: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewContact((prevContact) => ({ ...prevContact, [name]: value }));
    };

    const addContact = () => {
        dispatch({ type: "ADD_CONTACTS", payload: newContact });
        setNewContact({ id: null, name: "", phone: "", email: "" });
    };

    return (
        <div className="container">
            <h4>My Contacts</h4>
            <div className="row">
                {contactsState.contacts.map((item) => (
                    <div className="col-md-3" key={item.id}>
                        <div className="card" style={{ width: "18rem" }}>
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <h6 className="card-subtitle mb-2 text-body-secondary">{item.email}</h6>
                                <p className="card-text">{item.phone}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={newContact.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">
                        Phone
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="phone"
                        name="phone"
                        value={newContact.phone}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={newContact.email}
                        onChange={handleInputChange}
                    />
                </div>
                <button type="button" className="btn btn-primary" onClick={addContact}>
                    Add Contact
                </button>
            </form>
        </div>
    );
}

export default ContactusingReducer;
