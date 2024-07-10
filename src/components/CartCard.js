import './CartCard.css';

const CartCard = ({product}) => {
  const {name, price, image} = product;

  return (
    <div className='cartCard'>
      <img src={image} alt={name} />
      <p className="productName">{name}</p>
      <p className="productPrice">${price}</p>
      <button>Remove Product</button>
    </div>
  )
}

export default CartCard