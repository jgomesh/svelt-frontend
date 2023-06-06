import Header from '../components/Header';
import { useState } from 'react';
import useLoginEffect from '../hooks/LoginEffect';
import IProps from '../interfaces/IProps';
import Footer from '../components/Footer';
import FinishForm from '../components/FinishForm';
import Loading from '../components/Loading';

function FinishPayment(props: IProps) {
  const [hiddeCart, setHiddeCart] = useState(true);
  const { userData, disabled, setDisabled, loading, cartInfo, setCartInfo } = useLoginEffect(props.history);
  const roleUser = (userData.role === 'user');
  const roleSeller = (userData.role === 'seller' || userData.role === 'admin');
  return (
    <>
        <Header
          hiddeCart={hiddeCart}
          setHiddeCart={setHiddeCart}
          roleUser={roleUser}
          name={userData.name}
          history={props.history}
          roleSeller={roleSeller}
        />
        <section>
          {loading? <Loading/> : (
            <>
              <FinishForm
                hiddeCart={hiddeCart}
                setHiddeCart={setHiddeCart}
                loading={loading}
                history={props.history}
                setCartInfo={setCartInfo}
                cartInfo={cartInfo}
                setDisabled={setDisabled}
                disabled={disabled}
              />
            </>
          )}
          <Footer setLoginOpen={() => {}}/>
        </section>
    </>
  );
}

export default FinishPayment;
