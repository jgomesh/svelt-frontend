import { useEffect, useState } from 'react';
import useLoginEffect from '../hooks/LoginEffect';
import Cart from '../components/Cart';
import IProps from '../interfaces/IProps';
import Loading from '../components/Loading';
import Footer from '../components/Footer';
import getUserSells from '../utils/api/getUserSells';
import ProductsDetails from '../components/ProductsDetails';
import Header from '../components/Header';

function UserShops(props: IProps) {
  const { userData, loading, cartInfo, setCartInfo } = useLoginEffect(props.history);
  const [ hiddeCart, setHiddeCart] = useState(true);
  const [userShops, setUserShops] = useState([]);
  const roleUser = (userData.role === 'user');
  const roleSeller = (userData.role === 'seller' || userData.role === 'admin');

  useEffect(() => {
    const getData = async () => {
      const sales = await getUserSells('user_sells');
      setUserShops(sales.sale);
      if(!sales.sale.length) {
        return false;
      }
    };
    getData();
  }, []);

  return (
    <>
      <Header hiddeCart={hiddeCart} setHiddeCart={setHiddeCart} name={userData.name} history={props.history} roleUser={roleUser} roleSeller={roleSeller} />
      <section className='sales_container'>
      {loading? <Loading /> : (
        <>
          <Cart setHiddeCart={setHiddeCart} hiddeCart={hiddeCart} cartInfo={cartInfo} setCartInfo={setCartInfo} history={props.history} finishPayment={false} setDisabled={() => {}} />
          <ProductsDetails userShops={userShops} history={props.history}/>
        </>
        )}
      </section>
      <Footer setLoginOpen={() => {}} />
    </>
  );
}

export default UserShops;

