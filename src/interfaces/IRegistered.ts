import IUserInfo from "./IUserInfo"

export default interface IRegistered {
  userInfo: IUserInfo,
  setError: Function,
  setRegistered: Function,
  disabled: boolean,
  error: boolean,
  registered: boolean,
  setUserInfo: Function,
  setDisabled: Function,
  history: { push: Function},
  setLoginOpen: Function
}