import backEndpoints from './backEndpoints';
import axios from 'axios';

const getSellerProducts =  async (type: 'my_products', id: number) => {
  const token: string | any = localStorage.getItem('token');
    if(!token && !token.length) {
      return 'Please login';
    } else {
      return await axios.get(
          `${backEndpoints[type]}/${id}`, 
          { headers: { authorization: token,}},
        ).then(res => {
          return res.data;
        }).catch((error) => {
          console.log(error.message);
          return error;
        }
    );
  }
};

export default getSellerProducts;
