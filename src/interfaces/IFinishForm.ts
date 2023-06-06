import ICarInfo from "./ICarInfo";

export default interface IFisishForm {
  loading: boolean,
  history: { push: Function},
  cartInfo: ICarInfo,
  setCartInfo: Function,
  disabled: boolean,
  setDisabled: Function,
  setHiddeCart: Function,
  hiddeCart: boolean
}
