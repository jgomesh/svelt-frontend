import editCart from '../utils/editCart';
import IEditOn from '../interfaces/IEdit';
import editChanger from '../utils/editChanger';

function EditOn({ product, editOn, setCartInfo, cartInfo, quantity, setEdit, setQuantity }: IEditOn) {

  return (
    <>
      {editOn ? (
        <button onClick={(event: any) => {
          event.preventDefault();
          editCart(quantity, product, cartInfo, setCartInfo);
          setEdit(!editOn);
        }}>
          CONFIRM
        </button>
      ): (
        <button onClick={(event: any) => {
          event.preventDefault();
          editChanger(product, setQuantity, setEdit, editOn)
        }}>
          EDIT
        </button>
      )}
    </>
  )
}

export default EditOn;
