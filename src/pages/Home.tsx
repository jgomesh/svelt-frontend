import { useEffect, useState } from 'react';
import Cart from '../components/Cart';
import useLoginEffect from '../hooks/LoginEffect';
import IProps from '../interfaces/IProps';
import getAllSellers from '../utils/api/getUser';
import Header from '../components/Header';
import redirect from '../utils/redirect';
import Footer from '../components/Footer';
import PromotionsSection from '../sections/PromotionsSection';
import Loading from '../components/Loading';
import AdminProducts from '../components/AdminProducts';

function Home(props: IProps) {
  const [sellers, setSellers] = useState([]);
  const [hiddeCart, setHiddeCart] = useState(true);
  const { userData, loading, cartInfo, setCartInfo, setLoading } = useLoginEffect(props.history);
  const roleUser = (userData.role === 'user');
  const roleSeller = (userData.role === 'seller' || userData.role === 'admin');
  
  if(roleSeller) {
    redirect({ preventDefault: () => {}}, props.history, '/dashboard')
  }

  useEffect(() => {
    setLoading(true);
    const getSellers = async () => {
      const sellers = await getAllSellers('sellers');

      setSellers(sellers.sellers);
      setLoading(false);
    };
    getSellers();
  }, []);

  return (
    <>
        <Header hiddeCart={hiddeCart} setHiddeCart={setHiddeCart} name={userData.name} history={props.history} roleUser={roleUser} roleSeller={roleSeller} />
        <section className='min_height'>
        { loading ? <Loading />: (
          <>
            { userData.role && roleUser && <Cart setHiddeCart={setHiddeCart} hiddeCart={hiddeCart} cartInfo={cartInfo} setCartInfo={setCartInfo} history={props.history} finishPayment={false} setDisabled={() => {}} /> }
            { userData.role && roleUser && <AdminProducts setCartInfo={setCartInfo} cartInfo={cartInfo} userId={userData.userId} /> }
            <PromotionsSection />
            {sellers.map((seller: any, index: number) => {
              return (
              <div className='seller_container' key={index}>
                <h4>{seller.name}</h4>
                <button onClick={() => redirect({ preventDefault: () => {} }, props.history, `/products/${seller.id}` )}>
                  VIEW PRODUCTS
                </button>
              </div>
            )})}
          </>
            ) }
        </section>
      <Footer setLoginOpen={() => {}} />
    </>
  );
}

export default Home;
