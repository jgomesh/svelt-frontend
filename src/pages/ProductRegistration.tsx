import { useState } from 'react';
import useLoginEffect from '../hooks/LoginEffect';
import redirect from '../utils/redirect';
import createProduct from '../utils/api/createSale';
import addImage from '../utils/api/addImage';
import IProps from '../interfaces/IProps';
import Footer from '../components/Footer';
import Header from '../components/Header';
const REACT_APP_BACKEND_HOST = '192.168.0.102'
const REACT_APP_BACKEND_PORT = '3001'

function ProductRegistration(props: IProps) {
  const [productData, setProductData]: any = useState({ name: '', price: 0, image: null });
  const [hiddeCart, setHiddeCart] = useState(false);
  const { userData } = useLoginEffect(props.history);
  const roleUser = userData.role === 'user';
  const [roleSeller, _setRoleSeller] = useState(!(userData.role === 'seller' || userData.role === 'admin'));

  const handleFileSelect = (event: any) => {
    const selectedFile = event.target.files[0];
    setProductData({ ...productData, image: selectedFile });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    // Create a new FormData object
    const formData = new FormData();
    formData.append('imagem', productData.image);
  
    // First, upload the image
    const result: any = await addImage(formData);
    if(!result.url) {
      return "ERRO"
    }

    const imageUrl = `http://${REACT_APP_BACKEND_HOST}:${REACT_APP_BACKEND_PORT}/images/${result.url}`
    const productDataWithImage = { ...productData, url_image: imageUrl };
    await createProduct(productDataWithImage, 'product');

    // Reset the form
    setProductData({ name: '', price: 0, image: null });

    redirect(event, props.history, '/my_products');
  };

  return (
    <>
      <Header
        hiddeCart={hiddeCart}
        setHiddeCart={setHiddeCart}
        roleSeller={roleSeller}
        name={userData.name}
        history={props.history}
        roleUser={roleUser}
      />
      <section className="register_seller_product">
          <form onSubmit={handleSubmit}>
            <h1>Register a new product</h1>
            <label htmlFor="name">Name of the product:</label>
            <input
              id="name"
              type="text"
              name="name"
              value={productData.name}
              onChange={(event) =>
                setProductData({ ...productData, name: event.target.value })
              }
              required
            />
            <label htmlFor="price">Price:</label>
            <input
              id="price"
              type="number"
              name="price"
              value={productData.price}
              onChange={(event) =>
                setProductData({ ...productData, price: event.target.value })
              }
              required
            />
            <label htmlFor="image">Image:</label>
            <input
              id="image"
              type="file"
              accept="image/*"
              onChange={handleFileSelect}
              required
            />
            <button type="submit">Register</button>
          </form>
      </section>
      <Footer setLoginOpen={() => {}} />
    </>
  );
}

export default ProductRegistration;
