import { useEffect, useState } from 'react';
import Header from '../components/Header';
import getProductById from '../utils/api/getProductById';
import ShopDetailsProd from '../components/ShopDetailsProd';
import getUserSaleDetails from '../utils/api/getUserSaleDetails';
import useLoginEffect from '../hooks/LoginEffect';
import IProps from '../interfaces/IProps';
import Footer from '../components/Footer';
import Loading from '../components/Loading';

function ShopDetails(props: IProps) {
  const [shopDetails, setShopDetails] = useState({ products: [], delivery_address: '', delivery_number: '', status: '', total_price: 0, sale_date: '' });
  const [ hiddeCart, setHiddeCart] = useState(false);
  
  const { userData, loading } = useLoginEffect(props.history);

  useEffect(() => {
    const getDetails = async () => {
      const details = await getUserSaleDetails('user_sells', props.match.params.id);

      if(!details.message) {
        const products: any = await Promise.all(details.salesProducts.map(async (product: any) => {
          const newDataProduct = await getProductById(product.product_id);
          if(!newDataProduct) {
            return undefined;
          }
          return { ...newDataProduct.product, quantity: product.quantity} ;
        }));
        setShopDetails({ ...details.sale, products: products});
      };
    };
    getDetails();
  }, []);

  const roleUser = (userData.role === 'user');
  const roleSeller = (userData.role === 'seller' || userData.role === 'admin');

  return (
    <>
        <Header hiddeCart={hiddeCart} setHiddeCart={setHiddeCart} roleSeller={roleSeller} roleUser={roleUser} name={userData.name} history={props.history} />
        <section>
          {loading ? <Loading /> : (
            <>
              <div className="product_container">
                <h3 className='data_de_compra'>{`Data da compra: ${shopDetails.sale_date.split(' ')[0]}`}</h3>
                <h1 className={`data_de_compra ${shopDetails.status.replace(' ', '_')}`}>{`${shopDetails.status}`}</h1>
                <ShopDetailsProd shopDetails={shopDetails} />
                <div className='data_de_compra'>
                  <span>{`Adress: ${shopDetails.delivery_address}, ${shopDetails.delivery_number}`}</span>
                  <p>{`Total: ${Number(shopDetails.total_price).toFixed(2)}`}</p>
                </div>
              </div>
            </>
          )}
        </section>
        <Footer setLoginOpen={() => {}} />
    </>
  );
}

export default ShopDetails;
