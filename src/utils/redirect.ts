const redirect = (event: { preventDefault: Function}, history: { push: Function }, route: string) => {
  event.preventDefault();
  history.push(route);
}

export default redirect;