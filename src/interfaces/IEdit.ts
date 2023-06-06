import IProduct from "./IProduct";
import ICarInfo from "./ICarInfo";

export default interface IEditOn {
  product: IProduct,
  editOn: boolean,
  setCartInfo: Function,
  cartInfo: ICarInfo,
  quantity: number,
  setEdit: Function,
  setQuantity: Function
};

