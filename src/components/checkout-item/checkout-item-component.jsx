import "./checkout-item-styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name"> {name} </span>
      <span className="quantity">
        <div className="arrow" onClick={""}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={""}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={""}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
