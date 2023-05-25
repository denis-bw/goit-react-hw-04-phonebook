import css from './ListContacts.module.css'
import PropTypes from 'prop-types';

export const ContactList = ({ visibleContact, deleteContact }) => {
    return <ul className={css.container__contact}>
                  {visibleContact.map(el => {
                    return <li className={css.item__contact} key={el.id}>
                              <p className={css.text__contact}>{el.name}: {el.number}</p>
                              <button className={css.btn__delete__contact} onClick={(e) => deleteContact(el.id)} type="button">
                                Delete
                              </button>
                            </li>
                        })}
                </ul>
}

ContactList.propTypes = {
    visibleContact: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired, // enjxy
    deleteContact: PropTypes.func.isRequired
};