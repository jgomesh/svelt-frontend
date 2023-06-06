const validateEmail = (email: string) => {
  const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const isValid = email.match(regex);
  if(!isValid) {
    return false;
  }
  return true;
}

export default validateEmail;