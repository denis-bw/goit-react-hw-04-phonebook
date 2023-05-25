import { nanoid } from "nanoid";
import css from './Filter.module.css'
import PropTypes from 'prop-types';

export const Filter = ({ filterListAddState }) => {
    
    const filterInputID = nanoid();

    return      <label className={css.label__find} htmlFor={filterInputID}>
                  <p className={css.text__input__find}>Find contacts by name</p>
                    <input
                      className={css.input__find}
                      onChange={filterListAddState}
                      type="text"
                      name="filter"
                      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                      required
                      id={filterInputID}
                      />
                </label>
}

Filter.propTypes = {
    filterListAddState: PropTypes.func.isRequired
};