import Cart from '../components/Cart';
import ICarInfo from '../interfaces/ICarInfo';
import IFisishForm from '../interfaces/IFinishForm';
import createNewSale from '../utils/createNewSale';

function FinishForm({loading, history, cartInfo, setCartInfo, disabled, setDisabled, hiddeCart, setHiddeCart }: IFisishForm) {
  const handleChange = (event: any) => {
    const newInfo: ICarInfo = {...cartInfo, [event.target.name]: event.target.value};
    setCartInfo(newInfo);

    if(newInfo.delivery_address && newInfo.delivery_address.length > 7 && newInfo.delivery_number && newInfo.delivery_number.length > 0 && newInfo.sales_products.length !== 0) {
      return setDisabled(false);
    } else {
      return setDisabled(true);
    }
  };

  return (
    <>
      {loading ? "Loading..." : (
        <section className='payment_section'>
          <form
            className='form_finish_payment'
            onSubmit={async (event: { preventDefault: Function}) => {
              event.preventDefault();
              setDisabled(true);
              await createNewSale(cartInfo, setCartInfo);
              history.push('/my_shopping')
            }}
          >
            <Cart setHiddeCart={setHiddeCart} hiddeCart={hiddeCart}  cartInfo={cartInfo} setCartInfo={setCartInfo} history={history} finishPayment={true} setDisabled={setDisabled} />
            <input className='form_finish' type="text" onChange={handleChange} name="delivery_address" placeholder="Endereço" />
            <input type="number" onChange={handleChange} name="delivery_number" placeholder="Número" />
            <div>
              <button disabled={disabled}>
                CONFIRMAR COMPRA
              </button>
            </div>
          </form>
        </section>
      )}
    </>
  );
}

export default FinishForm;
