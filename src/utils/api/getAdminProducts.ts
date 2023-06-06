import backEndpoints from './backEndpoints';
import axios from 'axios';

const getProducts = async () => {
  return await axios.get(backEndpoints['products'])
  .then(res => {
    return res.data
  }).catch((error) => {
    console.log(error.message)
    return error
  });
};

export default getProducts;
