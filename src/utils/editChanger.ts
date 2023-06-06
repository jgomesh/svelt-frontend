import IProduct from "../interfaces/IProduct";
import ICarInfo from "../interfaces/ICarInfo";

const editChanger = (product: IProduct, setQuantity: Function, setEdit: Function, editOn: boolean) => {
  const data: string | any = localStorage.getItem('cart');
  const dataDecoded: ICarInfo = JSON.parse(data);

  if (!dataDecoded.sales_products) {
    return false;
  }

  dataDecoded.sales_products.forEach((productExist: IProduct) => {
    if(Number(productExist.product_id) === Number(product.product_id)) {
      setQuantity(productExist.quantity);
    }
  });

  setEdit(!editOn);
}

export default editChanger;