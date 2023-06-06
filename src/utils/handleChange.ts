const handleChange = (event: { target: { name: string, value: string}}, setInfo: Function, info: any) => {
  setInfo({...info, [event.target.name]: event.target.value});
};

export default handleChange;
