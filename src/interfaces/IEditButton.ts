import IProduct from "./IProduct";

export default interface IEditButton {
  product: IProduct,
  editOn: boolean,
  onMore: Function,
  quantity: number,
  onLess: Function,
  avoidMax: Function,
};
