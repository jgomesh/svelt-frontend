import ICarInfo from "./ICarInfo";

export default interface ICartComponent {
  cartInfo: ICarInfo,
  setCartInfo: Function,
  history: { push: Function },
  finishPayment: boolean,
  setDisabled: Function,
  hiddeCart: boolean,
  setHiddeCart: Function
};
