import addAllPrices from "./addAllPrices";
import ICarInfo from "../interfaces/ICarInfo";

const deleteCarProduct = (id: number, cartInfo: ICarInfo, setDisabled: Function, setCartInfo: Function) => {
  const data: any = localStorage.getItem('cart');
  const products = JSON.parse(data).sales_products.filter((product: any) => {
    if(Number(product.product_id) === id) {
      return false;
    }
    return true;
  });

  
  const prices = products.map((product: any) => product.price * product.quantity);
  const totalPrice = addAllPrices(prices);

  const newData = {
    ...cartInfo,
    total_price: totalPrice,
    sales_products: products,
  }

  if(products.length === 0) {
    setDisabled(true)
  };
  
  setCartInfo(newData);

  return localStorage.setItem('cart', JSON.stringify(newData));
};

export default deleteCarProduct