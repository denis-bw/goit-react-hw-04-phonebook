import React, { Component } from "react";
import { nanoid } from "nanoid";
import css from './ContactForm.module.css'
import PropTypes from 'prop-types';

export class ContactForm extends Component {
    
    state = {
        name: '',
        number: '',
    } 

    NameInputId = nanoid();
    NumberInputID = nanoid();

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = e.currentTarget;
    
    this.props.handleSubmitForm(name,number)

    this.resetState()
    name.value = "";
    number.value = "";
  };
  
  resetState = () => { 
    this.setState({
      name: '',
      number: ''
    })
  }


    handleChangeInput = (e) => {
    const {name, value} = e.currentTarget;

    this.setState({
      [name]: value,
    })
  }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className={css.form__contacts}>
                <label htmlFor={this.NameInputId}>
                  <p className={css.form__text}>Name</p>
                  <input
                      className={css.input__form}
                      onChange={this.handleChangeInput}
                      type="text"
                      name="name"
                      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                      required
                      id={this.NameInputId}
                      />
                </label>
          
                <label htmlFor={this.NumberInputID}>
                  <p className={css.form__text}>Number</p>
                  <input
                      className={css.input__form}
                      onChange={this.handleChangeInput}
                      type="tel"
                      name="number"
                      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                      required
                      id={this.NumberInputID}
                  />
                </label>
                
            <button className={css.btn__form} type="submit">Add contact</button>
            </form>
            
    )
  }
  
};

ContactForm.propTypes = {
  handleSubmitForm: PropTypes.func.isRequired,
};