import backEndpoints from './backEndpoints';
import IProduct from '../../interfaces/IProduct';
import ICarInfo from '../../interfaces/ICarInfo';
import axios from 'axios';

const createSale =  async (sale: ICarInfo | IProduct, type: 'sell' | 'product') => {
  const token: any = localStorage.getItem('token');

    if(!token.length) {
      return 'There is something wrong with your login';
    } else {
      return await axios.post(
          backEndpoints[type],
          { ...sale },
          { headers: { authorization: token}}
        ).then(res => {
          return res.data;
        }).catch((error) => {
          console.log(error.message);
          return error;
        }
    );
  }
};

export default createSale;
