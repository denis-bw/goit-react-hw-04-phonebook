import  { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { ContactForm } from '../ContactForm/ContactForm'
import {ContactList} from '../ContactList/ContactList'
import { Filter } from '../Filter/Filter'
import css from './App.module.css'


export function App () {

  const [contacts, setContacts] = useState(JSON.parse(window.localStorage.getItem("constactList")) ?? [])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    window.localStorage.setItem("constactList", JSON.stringify(contacts))
  },[contacts])
  
  const handleSubmitForm = (contactName, contactsNumber) => {

    const equalName = contacts.find(contact => contactName.toUpperCase() === contact.name.toUpperCase()) 
    if (equalName) return alert(`${equalName.name} is already in contacts`);

    const equalNumber = contacts.find(contact => contactsNumber === contact.number) 
    if (equalNumber) return alert(`${equalNumber.number} is already in contacts`);

    const contact = { id: nanoid(), name: contactName, number: contactsNumber};

    setContacts(prevState => {
      return  [...prevState, contact] ;
    })
  }

  const filterListAddState = e => {
    setFilter( e.currentTarget.value )
  }

  const filterOnName = () => {
    const normalizedFilter = filter.toUpperCase();
    // console.log(contacts)
      return contacts.filter(constact => constact.name.toUpperCase().includes(normalizedFilter))
  }

  const deleteContact = id => {
    const positiveValues = contacts.filter(el => el.id !== id);
    setContacts(positiveValues)
  }

  
    return (  
      <div className={css.container}>
        <h1 className={css.title}>Phonebook</h1>

        <ContactForm handleSubmitForm={handleSubmitForm} />
        
        <h2 className={css.title}>Contacts</h2>

        <Filter filterListAddState={filterListAddState} />
        <ContactList visibleContact={filterOnName()} deleteContact={deleteContact} />
      </div>
    )
};
