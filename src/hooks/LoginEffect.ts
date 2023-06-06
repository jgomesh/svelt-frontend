import { useState, useEffect } from 'react';
import getSellerProducts from '../utils/api/getSellerProducts';
import addAllPrices from '../utils/addAllPrices';
import getUser from '../utils/api/getUser';

const LoginEffect = (history: { push: Function}) => {
  const [userData, setUser]: any = useState({name: '', userId: 1});
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(true);
  const [sellerProducts, setSellerProducts] = useState([]);
  const [cartInfo, setCartInfo] = useState({ user_id: 0, seller_id: 0, total_price: 0.00, delivery_address: "", delivery_number: "", sales_products: []});

  useEffect(() => {
    setLoading(true);
  
    const token = localStorage.getItem('token');
  
    if(!token || !token.length || token === 'undefined') {
      history.push('/');
    };
  
    const data: any = localStorage.getItem('cart');
  
    if(data) {
      const cartItems = JSON.parse(data);
      const prices = cartItems.sales_products.map((product: any) => Number(product.price) * Number(product.quantity));
      const totalPrice = addAllPrices(prices);
      setCartInfo({ ...cartItems, total_price: totalPrice });
      if(cartItems.sales_products.length === 0) {
        setDisabled(true);
      }
    };
  
    const requestData = async () => {
      const data = await getUser('auth');
      setUser(data);
      if(data && data.name === 'AxiosError') {
        localStorage.setItem('token', '');
        history.push('/');
      }
      const products = await getSellerProducts('my_products', data.userId);

      setSellerProducts(products.products);
    };
  
    requestData();
  
    setLoading(false);
  }, []);

  return { userData, setUser, disabled, setDisabled, loading, setLoading, cartInfo, setCartInfo, sellerProducts, setSellerProducts }
}

export default LoginEffect;
