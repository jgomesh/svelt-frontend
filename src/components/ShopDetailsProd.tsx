function ShopDetailsProd({ shopDetails }: { shopDetails: any }) {

  return (
    <div className="seller_products_container">
      {shopDetails.products.map((product: any, index: number) => (
        <div className="seller_sold_product" key={index}>
          <h4>{product.name}</h4>
          <img className="sell_product" src={product.url_image} alt={product.name} />
          <p>{product.quantity}</p>
        </div>
      ))}
    </div>
  );
}

export default ShopDetailsProd;
