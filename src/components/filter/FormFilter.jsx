import { useDispatch, useSelector } from 'react-redux';
import { filter, filterSelector } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const contactFilter = useSelector(filterSelector);

  return (
    <input
      value={contactFilter}
      type="text"
      name="filter"
      onChange={evt => dispatch(filter(evt.target.value))}
    />
  );
};
