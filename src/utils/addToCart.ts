import addAllPrices from "./addAllPrices";
import IProduct from "../interfaces/IProduct";
import ICarInfo from "../interfaces/ICarInfo";

const addToCart = (quantity: number, product: IProduct, cartInfo: ICarInfo, userId: number, setCartInfo: Function, setQuantity: Function) => {

  const data: any = localStorage.getItem('cart');

  if(!quantity){
    return null
  }

  if(data) {
    if(Number(JSON.parse(data).seller_id) !== Number(product.seller_id)) {
      const newSeller = {
        ...cartInfo,
        user_id: userId,
        seller_id: product.seller_id,
        total_price: Number(product.price) * quantity,
        sales_products: [
          {
            quantity: quantity,
            product_id: product.id,
            price: Number(product.price),
            name: product.name,
            url_image: product.url_image,
          }
        ]
      }
      setCartInfo(newSeller);
      localStorage.setItem('cart', JSON.stringify(newSeller));

      return setQuantity(0);
    }
    const dataDecoded: any = JSON.parse(data);
    const productAlreadyExist = dataDecoded.sales_products.some((productExist: any) => {
      if(Number(productExist.product_id) === Number(product.id)) {
        return true;
      }
      return false;
    });
    if(productAlreadyExist) {
      const productsUpdated = dataDecoded.sales_products.map((productExist: any) => {
        if(Number(productExist.product_id) === Number(product.id)) {
          return {...productExist, quantity: (productExist.quantity + quantity) > 50 ? 50 : productExist.quantity + quantity};
        }
        return productExist;
      });

      const cartItems = {
        ...cartInfo,
        ...dataDecoded, 
        user_id: userId,
        seller_id: product.seller_id,
        sales_products: productsUpdated,
      };

      const prices = cartItems.sales_products.map((product1: any) => Number(product1.price) * Number(product1.quantity));
      const totalPrice = addAllPrices(prices);
      const cartItemsCoded = JSON.stringify(cartItems);

      setCartInfo({ ...cartInfo, ...cartItems, total_price: totalPrice});
      localStorage.setItem('cart', cartItemsCoded);

      return setQuantity(0);
    }

    const products = {
      ...cartInfo,
      ...dataDecoded,
      user_id: userId,
      seller_id: product.seller_id,
      sales_products: [
        ...dataDecoded.sales_products,
        {
          quantity: quantity,
          product_id: product.id,
          price: Number(product.price),
          name: product.name,
          url_image: product.url_image,
        },
      ],
    };

    const prices = products.sales_products.map((product1: any) => Number(product1.price) * Number(product1.quantity));
    const totalPrice = addAllPrices(prices);
    const productsCoded = JSON.stringify(products);

    setCartInfo({ ...cartInfo, ...products, total_price: totalPrice});
    localStorage.setItem('cart', productsCoded);

    return setQuantity(0);
  }
  //  O QUE ACONTECE CASO NÃO TENHA NENHUM PRODUTO
  const cart = { 
    ...cartInfo,
    user_id: userId,
    seller_id: product.seller_id,
    sales_products: [
      {
        quantity: quantity,
        product_id: product.id,
        price: Number(product.price),
        name: product.name,
        url_image: product.url_image,
      }
    ]
  };

  const cartEncoded = JSON.stringify(cart);
  const prices = cart.sales_products.map((product1: any) => Number(product1.price) * Number(product1.quantity));
  const totalPrice = addAllPrices(prices);

  localStorage.setItem('cart', cartEncoded);
  setQuantity(0);
  setCartInfo({ ...cartInfo, ...cart, total_price: totalPrice})
  return cartEncoded;

}

export default addToCart;

