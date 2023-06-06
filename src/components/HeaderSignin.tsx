import redirect from '../utils/redirect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignIn } from '@fortawesome/free-solid-svg-icons';

function HeaderSignin ({setLoginOpen, history}: {setLoginOpen: Function, history: { push: Function}}) {
  return (
    <header>
      <span className='logo' onClick={(event) => redirect(event, history, '/')}>Svelt</span>
      <div>
        <FontAwesomeIcon onClick={() => setLoginOpen(true)} className='signout' icon={faSignIn} />
      </div>
    </header>
  );
}

export default HeaderSignin;
