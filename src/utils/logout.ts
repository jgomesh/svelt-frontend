const logout = (history: { push: Function }) => {
  localStorage.removeItem('token');
  localStorage.removeItem('cart');
  history.push('/');
}

export default logout;