import React, { Component } from "react";
import { nanoid } from "nanoid";
import { ContactForm } from '../ContactForm/ContactForm'
import {ContactList} from '../ContactList/ContactList'
import { Filter } from '../Filter/Filter'
import css from './App.module.css'


export class App extends Component  {
  state = {
    contacts: [],
    filter: '',
  } 


  componentDidMount() {
    const contactList = localStorage.getItem("constactList");  
    if (contactList) {
      this.setState(
        {contacts: JSON.parse(contactList)}
      )
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.constacts) {
      localStorage.setItem("constactList", JSON.stringify(this.state.contacts))
    }
  }

  handleSubmitForm = (contactName, contactsNumber) => {

    const equalName = this.state.contacts.find(contact => contactName.value.toUpperCase() === contact.name.toUpperCase()) 
    if (equalName) return alert(`${equalName.name} is already in contacts`);

    const equalNumber = this.state.contacts.find(contact => contactsNumber.value === contact.number) 
    if (equalNumber) return alert(`${equalNumber.number} is already in contacts`);

    const contact = { id: nanoid(), name: contactName.value, number: contactsNumber.value };

    this.setState((state) => {
      return { contacts: [...state.contacts, contact] };
    })
  }

  filterListAddState = e => {
    this.setState({ filter: e.currentTarget.value })
  }

  filterOnName = () => {
      const normalizedFilter = this.state.filter.toUpperCase();
      return this.state.contacts.filter(constact => constact.name.toUpperCase().includes(normalizedFilter))
  }

  deleteContact = id => {
    const positiveValues = this.state.contacts.filter(el => el.id !== id);
    this.setState({ contacts: positiveValues })
  }

  render() {
    return (  
      <div className={css.container}>
        <h1 className={css.title}>Phonebook</h1>

        <ContactForm handleSubmitForm={this.handleSubmitForm} />
        
        <h2 className={css.title}>Contacts</h2>

        <Filter filterListAddState={this.filterListAddState} />
        <ContactList visibleContact={this.filterOnName()} deleteContact={this.deleteContact} />
      </div>
    )}
};
