function Footer({ setLoginOpen } : { setLoginOpen: Function }) {
  return (
    <footer onClick={() => setLoginOpen(false)}>
      <div></div>
      <span>
        Site fictício, entre em contato por <b>joao.gomeshugill@gmail.com</b>
      </span>
    </footer>
  );
}

export default Footer;
