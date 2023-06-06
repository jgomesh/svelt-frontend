import { useState } from 'react';
import IProps from '../interfaces/IProps';
import RegisterForm from '../components/RegisterForm';
import HeaderSignin from '../components/HeaderSignin';
import Footer from '../components/Footer';
import LoginForm from '../components/LoginForm';

function Register(props: IProps) {
  const [loginOpen, setLoginOpen] = useState(false);
  const [userInfo, setUserInfo] = useState({ email: '', password: '', name: ''});
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [error, setError] = useState(false)


  return (
    <>
      <HeaderSignin setLoginOpen={setLoginOpen} history={props.history} />
      <section className='register__section'>
        <LoginForm
          setLoading={setLoading}
          userInfo={userInfo}
          setError={setError}
          history={props.history}
          setUserInfo={setUserInfo}
          loading={loading}
          error={error}
          loginOpen={loginOpen}
          setLoginOpen={setLoginOpen}
        />
        <RegisterForm
          setLoginOpen={setLoginOpen}
          userInfo={userInfo}
          setError={setError}
          setUserInfo={setUserInfo}
          disabled={disabled}
          setDisabled={setDisabled}
          registered={registered}
          setRegistered={setRegistered}
          error={error}
          history={props.history}
        />
      </section>
      <Footer setLoginOpen={setLoginOpen} />
    </>
  );
}

export default Register;
