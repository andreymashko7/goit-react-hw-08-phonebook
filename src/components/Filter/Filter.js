import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/phonebook/phonebook-selectors';
import s from './Filter.module.css';
import * as contactsActions from '../../redux/phonebook/phonebook-actions';

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChange = e => dispatch(contactsActions.changeFilter(e.target.value));

  return (
    <label className={s.labelFilter}>
      Find contacts by name
      <input
        type="text"
        className={s.inputLabel}
        value={value}
        onChange={onChange}
      />
    </label>
  );
}
