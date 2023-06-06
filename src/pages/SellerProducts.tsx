import useLoginEffect from '../hooks/LoginEffect';
import { useState } from 'react';
import IProps from '../interfaces/IProps';
import deleteItem from '../utils/api/deleteItem';
import getSellerProducts from '../utils/api/getSellerProducts';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Loading from '../components/Loading';

function SellerProducts(props: IProps) {
  const { userData, loading, setLoading, setSellerProducts, sellerProducts } = useLoginEffect(props.history);
  const [roleSeller, setRoleSellet] = useState(!(userData.role === 'seller' || userData.role === 'admin'))
  const [hiddeCart, setHiddeCart] = useState(false);
  const roleUser = (userData.role === 'user');
  return (
    <>
      <Header hiddeCart={hiddeCart} setHiddeCart={setHiddeCart} name={userData.name} history={props.history} roleUser={roleUser} roleSeller={roleSeller} />
          <section className='own_products_section'>
            {loading ? <Loading /> : (
              <>
                {sellerProducts.map((product: any, index: number) => (
                  <div className='own_products_div' key={index}>
                    <h4>{product.name}</h4>
                    <img className='seller_product' src={product.url_image} alt={product.name} />
                    <p>Price: R$ {product.price}</p>
                    {roleSeller && (
                      <button
                        className='delete_button'
                        onClick={async () => {
                          setLoading(true);
                          await deleteItem('product', product.id);
                          const data = await getSellerProducts('my_products', product.seller_id);
                          setSellerProducts(data.products);
                          setLoading(false);
                        }}
                      > 
                        DELETE PRODUCT
                      </button>
                    )}
                  </div>
                )).reverse()}
              </>
            )}
          </section>
      <Footer setLoginOpen={() => {}} />
    </>
  );
}

export default SellerProducts;
