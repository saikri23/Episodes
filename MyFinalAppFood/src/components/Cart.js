import ItemList from "./ItemList";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        {cartItems.map((item_) => (
          <ItemList key={item_.card.info.id} item={item_} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
