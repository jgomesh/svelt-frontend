import backEndpoints from './backEndpoints';
import axios from 'axios';

const getTopProducts = async () => {
  return await axios.get(backEndpoints['top_products'])
  .then(res => {
    return res.data
  }).catch((error) => {
    console.log(error.message)
    return error
  });
};

export default getTopProducts;
