function CGirl({ setLoginOpen } : { setLoginOpen: Function }) {
  return (
    <section className='c__girl' onClick={() => setLoginOpen(false)}>
      <div className='left__container'>

      </div>
      <div className='right__container' onClick={() => setLoginOpen(false)}>
        <p>
          Navegue pelo nosso amplo catálogo e encontre peças que irão destacar a sua personalidade e deixar você pronto para qualquer ocasião.
        </p>
      </div>
    </section>
  );
}

export default CGirl;
