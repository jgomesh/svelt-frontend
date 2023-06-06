const validateName = ( name: string ) => {
  if(name && name.length > 7) {
    return true;
  } else {
    return false;
  };
}

export default validateName;