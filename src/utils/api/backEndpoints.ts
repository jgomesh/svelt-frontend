const REACT_APP_BACKEND_HOST = '3.129.12.133';
const REACT_APP_BACKEND_PORT = '3001';

const BASE_URL = `http://${REACT_APP_BACKEND_HOST}:${REACT_APP_BACKEND_PORT}`;

const endpoints: any =  {
  auth: `${BASE_URL}/auth`,
  start: `${BASE_URL}/restart`,
  stop: `${BASE_URL}/stop`,
  login: `${BASE_URL}/login`,
  status: `${BASE_URL}/status`,
  cancel_status: `${BASE_URL}/cancel_status`,
  sellers: `${BASE_URL}/sellers`,
  my_products: `${BASE_URL}/my_products`,
  products: `${BASE_URL}/products`,
  product: `${BASE_URL}/product`,
  user_sells: `${BASE_URL}/user_sells`,
  seller_sells: `${BASE_URL}/seller_sells`,
  seller_name: `${BASE_URL}/seller_name`,
  register: `${BASE_URL}/register`,
  register_seller: `${BASE_URL}/register_seller`,
  sell: `${BASE_URL}/sell`,
  sells: `${BASE_URL}/sells`,
  top_sellers: `${BASE_URL}/top_sellers `,
  top_products: `${BASE_URL}/top_products`,
  add_image: `${BASE_URL}/add_image`,
};

export default endpoints;