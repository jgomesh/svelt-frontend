function HeroBanner({ setLoginOpen} : {setLoginOpen: Function}) {
  return (
    <section
      className='hero_banner'
      onClick={() => setLoginOpen(false)}
    >
      <p>
        Roupas para <span>todos os estilos</span> e ocasiões.
      </p>
    </section>
  );
}

export default HeroBanner;
