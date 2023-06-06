import CartItem from "./CartItem";
import ICarInfo from "../interfaces/ICarInfo";

function  CartItems({cartInfo, setCartInfo, setDisabled }: {cartInfo: ICarInfo, setCartInfo: Function, setDisabled: Function }) {
  
  return (
      <div className="cart_items_container">
        {cartInfo.sales_products && cartInfo.sales_products.map((product: any, index: number) => (
          <CartItem key={`cart-${index}`} product={product} setDisabled={setDisabled} setCartInfo={setCartInfo} cartInfo={cartInfo}/>
         ))
        }
      </div>
  );
}

export default CartItems;
