import { useState } from 'react';
import useQuantity from '../hooks/useQuantity';
import ICarInfo from '../interfaces/ICarInfo';
import IProduct from '../interfaces/IProduct';
import ConfirmChange from './ConfirmChange';
import addToCart from '../utils/addToCart';

function Product({ product, setCartInfo, cartInfo, userId }: { product: IProduct, setCartInfo: Function, cartInfo: ICarInfo, userId: number }) {
  const [confirm, setConfirm] = useState(false);
  const { quantity, setQuantity, onMore, onLess } = useQuantity();

  const data: any = localStorage.getItem('cart');
  return (
    <>
      {confirm && (
        <ConfirmChange
          confirm={confirm}
          setConfirm={setConfirm}
          quantity={quantity}
          setQuantity={setQuantity}
          product={product}
          cartInfo={cartInfo}
          userId={userId}
          setCartInfo={setCartInfo}
        />
      )}
      <div className='product'>
        <h1>{product.name}</h1>
        <img src={product.url_image} alt={product.url_image} />
        <p>R${product.price}</p>
        <div className='product__input'>
          <button onClick={onLess}>-</button>
          <input type="number" value={quantity} onChange={(event: any) => {
            setQuantity(Number(event.target.value));
            if(Number(event.target.value) > 50 ) {
              setQuantity(50);
            }
          } } placeholder={`${quantity}`}/>
          <button onClick={onMore}>+</button>
        </div>
        <button className='add__to__cart' onClick={() => {
          const cart = JSON.parse(data)

          if(cart && (Number(cart.seller_id) !== Number(product.seller_id)) && cart.seller_id !== null) {
            return  setConfirm(true);
          }
          addToCart(quantity, product, cartInfo, userId, setCartInfo, setQuantity);
        }}>
          Add to cart
        </button>
      </div>
    </>
  );
}

export default Product;
