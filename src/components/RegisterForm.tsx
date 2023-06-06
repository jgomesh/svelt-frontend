import { useState } from 'react';
import RegisterErros from '../components/RegisterErros';
import validateEmail from '../utils/validations/validateEmail';
import validateName from '../utils/validations/validateName';
import IUserInfo from '../interfaces/IUserInfo';
import IRegistered from '../interfaces/IRegistered';
import validatePassword from '../utils/validations/validatePassword';
import signIn from '../utils/signIn';

function RegisterForm({ userInfo, setError, setRegistered, disabled, error, registered, setUserInfo, setDisabled, setLoginOpen } : IRegistered ) {
  const [ role, setRole ]: any = useState('register');
  const [loading, setLoading] = useState(false);

  const handleChange = (event: any) => {
    const newInfo: IUserInfo = {...userInfo, [event.target.name]: event.target.value};
    setUserInfo({...userInfo, [event.target.name]: event.target.value});
    if(validateEmail(newInfo.email) && validateName(newInfo.name) && validatePassword(newInfo.password)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    };
  };

  return (
    <section className='register__form__section' onClick={() => setLoginOpen(false)} >
      <form className='register__form' onSubmit={(target:any) => {
        signIn(target, setLoading, userInfo, setError, setRegistered, role)
        setUserInfo({ email: '', password: '', name: ''});
      }}>
        <div className='form__header'>
          <h4>Registration form</h4>
        </div>
        <div className='form__body'>
          <label className='input__labels'>
            <span>Name: </span>
            <input onChange={handleChange} value={userInfo.name} type="text" name="name" placeholder="Your name" />
          </label>
          <label className='input__labels'>
            <span>Email: </span>
            <input onChange={handleChange} value={userInfo.email} type="email" name="email" placeholder="Your email" />
          </label>
          <label className='input__labels'>
            <span>Password: </span>
            <input onChange={handleChange} value={userInfo.password} type="password" name="password" placeholder="Your password" />
          </label>
          {loading? 'Loading...' : (
            <div className='signin__container'>
              <button disabled={disabled} onChange={handleChange}>
                Sign in
              </button>
              <RegisterErros error={error} registered={registered} />
            </div>
          )}
          <div className='radio__container'>
            <label>
              <input className='radio__input' type="radio" value="register" checked={role === "register"} onChange={({ target } : { target: { value: string }}) => setRole(target.value)} />
              user
            </label>
            <label>
              <input className='radio__input' type="radio" value="register_seller" checked={role === "register_seller"} onChange={({ target } : { target: { value: string }}) => setRole(target.value)} />
              seller
            </label>
          </div>
        </div>
      </form>
    </section>
  );
}

export default RegisterForm;