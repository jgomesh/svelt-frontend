import backEndpoints from './backEndpoints';
import axios from 'axios';

const getProductById = async (id: number) => {
  return await axios.get(`${backEndpoints['products']}/${id}`)
  .then(res => {
    return res.data
  }).catch((error) => {
    console.log(error.message)
    return error
  });
};

export default getProductById;
