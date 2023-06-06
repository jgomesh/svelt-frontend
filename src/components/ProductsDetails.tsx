import UserSell from '../components/userSell';

function ProductsDetails({ userShops, history}: { userShops: any[], history: { push: Function }}) {
  return (
    <div className='products_details'>
      {userShops.map((shop: any, index: number) => (
        <UserSell id={shop.id} history={history} shops={userShops} key={index} name={shop.seller_id} sale_date={shop.sale_date} status={shop.status} total_price={shop.total_price} />
      )).reverse()}
    </div>
  );
}

export default ProductsDetails;
