import backEndpoints from './backEndpoints';
import axios from 'axios';

const getTopSellers = async () => {
  return await axios.get(backEndpoints['top_sellers'])
  .then(res => {
    return res.data
  }).catch((error) => {
    console.log(error.message)
    return error
  });
};

export default getTopSellers;
