import IUserInfo from "./IUserInfo"

export default interface ILoginForm {
  setLoading: Function,
  userInfo: IUserInfo,
  setError: Function,
  history: { push: Function },
  setUserInfo: Function,
  loading: boolean,
  error: boolean,
  loginOpen: boolean,
  setLoginOpen: Function
}