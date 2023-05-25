import  { useState } from "react";
import css from './ContactForm.module.css'
import PropTypes from 'prop-types';

export function ContactForm({handleSubmitForm}) {
    
  const [nameUser, setNameUser] = useState('')
  const [numberUser, setNumberUser] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = e.currentTarget;
    
    handleSubmitForm(nameUser, numberUser)

    resetState()
      name.value = "";
      number.value = "";
  };
  
  const resetState = () => { 
    setNameUser('')
    setNumberUser('')
  }


  const handleChangeInput = (e) => {
    const {name, value} = e.currentTarget;

      switch (name) {
        case "name":
          setNameUser(value)  
          break;
        case "number":
          setNumberUser(value)  
          break;
        default: return;
      }
  }

        return (
            <form onSubmit={handleSubmit} className={css.form__contacts}>
                <label>
                  <p className={css.form__text}>Name</p>
                  <input
                      className={css.input__form}
                      onChange={handleChangeInput}
                      type="text"
                      name="name"
                      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                      required
                      />
                </label>
          
                <label>
                  <p className={css.form__text}>Number</p>
                  <input
                      className={css.input__form}
                      onChange={handleChangeInput}
                      type="tel"
                      name="number"
                      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                      required
                  />
                </label>
                
            <button className={css.btn__form} type="submit">Add contact</button>
            </form>
            
    )
};

ContactForm.propTypes = {
  handleSubmitForm: PropTypes.func.isRequired,
};