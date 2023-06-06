import { useEffect } from 'react';

const useLogged = (history: { push: Function}) => {
  useEffect(() => {
    const token: any = localStorage.getItem('token');
    if((token && !!token.length) && token !== 'undefined') {
      history.push('/home');
    }
  }, []);
}

export default useLogged;
