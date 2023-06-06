function Examples({ setLoginOpen } : { setLoginOpen: Function }) {
  return (
    <section className='examples' onClick={() => setLoginOpen(false)}>
      <div className='clouth__example__1'>

      </div>
      <div className='clouth__example__2'>

      </div>
      <div className='clouth__example__3'>

      </div>
    </section>
  );
}

export default Examples;
