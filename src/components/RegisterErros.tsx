function RegisterErros({ error, registered } : { error: boolean, registered: boolean }) {
  return (
    <div>
      {error ? (
        <div  className="error">
          <h1>Email já cadastrado!</h1>
        </div>
      ): ''}
      {!error && registered ? (
        <div  className="success">
          <h1>Registrado com sucesso</h1>
        </div>
      ): ''}
    </div>
  );
}

export default RegisterErros;
