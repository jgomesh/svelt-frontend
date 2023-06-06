import { useState} from 'react';
import useLogged from '../hooks/useLogged';
import IProps from '../interfaces/IProps';
import HeaderSignin from '../components/HeaderSignin';
import CGirl from '../sections/CGirl';
import Footer from '../components/Footer';
import Examples from '../sections/Examples';
import HeroBanner from '../sections/HeroBanner';
import LoginForm from '../components/LoginForm';

function Login(props: IProps) {
  useLogged(props.history);
  const [loginOpen, setLoginOpen] = useState(false);
  const [userInfo, setUserInfo] = useState({ email: '', password: '', name: ''});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  return (
    <section className='black_background'>
      <HeaderSignin setLoginOpen={setLoginOpen} history={props.history} />
      <HeroBanner setLoginOpen={setLoginOpen} />
      <Examples setLoginOpen={setLoginOpen} />
      <CGirl setLoginOpen={setLoginOpen} />
      <LoginForm
        setLoginOpen={setLoginOpen}
        loginOpen={loginOpen}
        userInfo={userInfo}
        setUserInfo={setUserInfo}
        loading={loading}
        setLoading={setLoading}
        error={error}
        setError={setError}
        history={props.history}
      />
      <Footer setLoginOpen={setLoginOpen} />
    </ section>
  );
}

export default Login;
