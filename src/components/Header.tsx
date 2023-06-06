import logout from '../utils/logout';
import redirect from '../utils/redirect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOut, faCartShopping, faBagShopping, faCoins, faArchive } from '@fortawesome/free-solid-svg-icons';

function Header({ history, name, roleUser, roleSeller,  setHiddeCart, hiddeCart }: { history: { push: Function }, name: string, roleUser: boolean, roleSeller: any, setHiddeCart: Function, hiddeCart: boolean } ) {
  if(name === 'AxiosError') {
    localStorage.removeItem('token');
    localStorage.removeItem('cart');
    redirect({ preventDefault: () => {}}, history, '/')
  }
  return (
    <header>
      <span className='logo' onClick={(event) => roleSeller ? redirect(event, history, '/dashboard') : redirect(event, history, '/home')}>Svelt</span>
      <nav className='nav__container'>
        <button onClick={(event) => redirect(event, history, ( roleUser ? '/my_shopping' : '/my_sells' ))}>
          { roleSeller ? <FontAwesomeIcon icon={faCoins} /> : <FontAwesomeIcon icon={faBagShopping}/>}
        </button>
        { roleSeller ? "" : <button onClick={() => setHiddeCart(!hiddeCart)}><FontAwesomeIcon icon={faCartShopping}/></button> }
        {roleSeller && (
          <button onClick={(event) => redirect(event, history, '/new_product')}>
            <FontAwesomeIcon icon={faArchive} />
          </button>
        )}
        {roleSeller && (
          <button onClick={(event) => redirect(event, history, '/my_products')}>
            <FontAwesomeIcon icon={faBagShopping} />
          </button>
        )}
        <button onClick={() => logout(history)}>
          <FontAwesomeIcon icon={faSignOut}/>
        </button>
      </nav>
    </header>
  );
}

export default Header;