import requestLoginOrSignin from "./api/requestLoginOrSignin";
import IUserInfo from "../interfaces/IUserInfo";

const signIn = async (event: Event, setLoading: Function, userInfo: IUserInfo, setError: Function, setRegistered: Function, role: 'login' | 'register' | 'register_seller') => {
  event.preventDefault();
  setLoading(true);
  const data = await requestLoginOrSignin(userInfo, role);
  if(!data.id) {
    setError(true);
    return setLoading(false);
  }
  setRegistered(true);
  setError(false);
  return setLoading(false);
}

export default signIn