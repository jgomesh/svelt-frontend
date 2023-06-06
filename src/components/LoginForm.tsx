import handleChange from '../utils/handleChange';
import { useState } from 'react';
import login from '../utils/login';
import ILoginForm from '../interfaces/ILoginForm';
import redirect from '../utils/redirect';

function LoginForm({ setLoading, userInfo, history, setUserInfo, loading, loginOpen, setLoginOpen }: ILoginForm) {
  const [error, setError] = useState(false)
  return (
    <form className={`login__section__form${loginOpen? '' : '__hidden'}`} onSubmit={(target: any) => login(target, setLoading, userInfo, setError, history)}>
      <input onChange={(event) => handleChange(event, setUserInfo, userInfo)} type="email" name="email" placeholder="Your email" />
      <input  onChange={(event) => handleChange(event, setUserInfo, userInfo)} type="password" name="password" placeholder="Your password" />
      {loading? 'Loading...' : (
        <div>
          <div className='login__section__form__container'>
            <button name='register button' onClick={(event: any) => redirect(event, history, '/register')}>
              Register
            </button>
            <button name='login button'>
              Log in
            </button>
          </div>
          {error ? (
            <div className='login__section__form__container__error'>
              <h1>Senha ou email inválido</h1>
            </div>
          ): ''}
        </div>
      )}
    </form>
  );
}

export default LoginForm;
