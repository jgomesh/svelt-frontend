import addAllPrices from "./addAllPrices";
import IProduct from "../interfaces/IProduct";
import ICarInfo from "../interfaces/ICarInfo";

const editCart = (quantity: number, product: IProduct, cartInfo: ICarInfo, setCartInfo: Function) => {

  const data: any = localStorage.getItem('cart');

  if(!quantity){
    return null
  }

  if(data) {
    const dataDecoded: any = JSON.parse(data);

      const productsUpdated = dataDecoded.sales_products.map((productExist: any) => {
        if(Number(productExist.product_id) === Number(product.product_id)) {
          return {...productExist, quantity: quantity};
        }
        return productExist;
      });

      const cartItems = {
        ...cartInfo,
        ...dataDecoded,
        sales_products: productsUpdated,
      };

      const prices = cartItems.sales_products.map((product1: any) => Number(product1.price) * Number(product1.quantity));
      const totalPrice = addAllPrices(prices);
      const cartItemsCoded = JSON.stringify(cartItems);

      setCartInfo({ ...cartInfo, ...cartItems, total_price: totalPrice});
      localStorage.setItem('cart', cartItemsCoded);
    }
}

export default editCart