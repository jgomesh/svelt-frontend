import backEndpoints from './backEndpoints';
import axios from 'axios';

const deleteItem =  async (type: 'product', id: number) => {
  const token: string | any = localStorage.getItem('token');
    if(!token && !token.length) {
      return 'Please login';
    } else {
      return await axios.delete(
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

export default deleteItem;
