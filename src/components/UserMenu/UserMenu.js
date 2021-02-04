import userImages from '../../images/user1.png';
import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const avatar = userImages;

  return (
    <div className="user-menu">
      <img src={avatar} alt="" width="28" />
      <span>
        Welcome <span className="name"> {name}</span>
      </span>
      <button
        type="button"
        className="Button-exit"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Exit
      </button>
    </div>
  );
}
