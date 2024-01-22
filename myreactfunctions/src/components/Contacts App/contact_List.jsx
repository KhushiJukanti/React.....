import { useState } from "react";
import GroupModal from "./GroupModel";
<GroupModal/>

function Contactlist() {

    const [contacts, setContacts] = useState([])
    const [contact, setContact] = useState({ name: "", email: "", phone: "", address: "" })
    const [filteredContacts, setFilteredContacts] = useState([])
    const [searchQuery, setSearchQuery] = useState(null)
    const [isEdit, setIsEdit] = useState(false)
    const [selectedPhone, setSelectedPhone] = useState(null)
    const [groupList, setGroupList] = useState([])
    const [isModelOpen,setIsModelOpen] = useState (false)

    const onFieldChange = (e, field) => {
        // console.log(contacts)
        setContact({ ...contact, [field]: e.target.value })
    }

    const createContact = () => {
        setContacts([...contacts, contact])
        setFilteredContacts([...contacts, contact])
        setContact({ ...contact, name: "", email: "", phone: "", address: "" })
        // console.log(contacts)
    }

    const updateContact = () => {
        const updatedContacts = [...contacts]
        const index = updatedContacts.findIndex((item)=>{
            return item.phone === selectedPhone
        })

        updatedContacts[index].name = contact.name
        updatedContacts[index].phone = contact.phone
        updatedContacts[index].email= contact.email
        updatedContacts[index].address = contact.address
        setFilteredContacts(updatedContacts)
        setContact({...contact, name:"", email:"", phone:"", address:""})
        setIsEdit(false)
    }

    const editContact = (phone) => {
        setIsEdit(true)
        const updatedContacts = [...contacts];
        const index = updatedContacts.findIndex((item)=>{
            return item.phone === phone
        })
        setContact({...contact, ...updatedContacts[index]})
        setSelectedPhone(phone)
    }
    const deleteContact = (phone) => {
        const updatedContacts = [...contacts];
        const index = updatedContacts.findIndex((item) =>{
            return item.phone === phone
        })
        updatedContacts.splice(index, 1);
        setFilteredContacts(updatedContacts)
        setContacts(updatedContacts);
    }

    const openGroupModal = () => {
        console.log("model opening")
        setIsModelOpen(!isModelOpen)
    }

    const onSearchChange =(e)=>{
        setSearchQuery(e.target.value)
        if(e.target.value){
            let foundContacts = contacts.filter((contact)=>{
                return contact.name.includes(e.target.value)
            })
            setFilteredContacts(foundContacts)
        } else{
            setFilteredContacts(contacts)
        }
    }

    const createGroupList =(data)=>{
        console.log(data)
        setGroupList([...groupList,data])
        setIsModelOpen(!isModelOpen)
    }

    return (
        <div className="container">
            <h4>contacts App in progress</h4>

            <div className="form-group" style={{ marginBottom: '10px' }}>
                <label style={{ marginRight: '1200px', marginBottom: '10px' }}>Name</label>
                <input type="text" className="form-control" placeholder="enter the name" value={contact.name} onChange={(e) => onFieldChange(e, "name")} />
            </div>

            <div className="form-group" style={{ marginBottom: '10px' }}>
                <label style={{ marginRight: '1200px', marginBottom: '10px' }}>Email</label>
                <input type="text" className="form-control" placeholder="enter the email" value={contact.email} onChange={(e) => onFieldChange(e, "email")} />
            </div>

            <div className="form-group" style={{ marginBottom: '10px' }}>
                <label style={{ marginRight: '1200px', marginBottom: '10px' }}>Phone</label>
                <input type="text" className="form-control" placeholder="enter the phone" value={contact.phone} onChange={(e) => onFieldChange(e, "phone")} />
            </div>

            <div className="form-group" style={{ marginBottom: '10px' }}>
                <label style={{ marginRight: '1200px', marginBottom: '10px' }}>Address</label>
                <input type="text" className="form-control" placeholder="enter the address" value={contact.address} onChange={(e) => onFieldChange(e, "address")} />
            </div>

            <div className="row mt-4">
                <div className="col-md-3">
                    {!isEdit && <button className="btn btn-primary" onClick={() => createContact()}>Create Contact</button>}
                    {isEdit && <button className="btn btn-primary" onClick={() => updateContact()}>Update Contact</button>}
                </div>
                <div className="col-md-6">

                    <input className="form-control" type="text" value={searchQuery} placeholder="search contacts by name phone email"  onChange={(e) => onSearchChange(e)} />
                </div>

                <div className="col-md-3">
                    <button className="btn btn-warning" onClick={() => openGroupModal()}>+Create Group</button>
                </div>

            </div>



            <div className="row mt-4">
                <div className="list-group">
                    {filteredContacts.map((item) => {
                        return (
                            <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                                <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1">Name: {item.name}</h5>
                                    <small>email: {item.email}</small>
                                </div>
                                <p class="mb-1">phone: {item.phone}</p>
                                <small>Address:{item.address}</small>
                                <div class="d-flex w-100 justify-content-between">
                                    <button className="btn btn-info" onClick={() => editContact(item.phone)}>edit</button>
                                    <button className="btn btn-danger" onClick={() => deleteContact(item.phone)}>delete</button>
                                </div>
                            </a>
                        )
                    })}
                </div>
            </div>
            {isModelOpen && <GroupModal onClose={()=>setIsModelOpen(false)} createGroup={createGroupList}/>}
            <ul>
                {groupList.map((group)=>{
                    return(
                        <li>{group}</li>
                    )
                })}
            </ul>
        </div>
    );
}

export default Contactlist
