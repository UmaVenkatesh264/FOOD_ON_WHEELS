import { useDispatch, useSelector } from "react-redux"
import ItemList from "./ItemList"
import { clearCart } from "../utils/cartSlice"

const Cart = () =>{

  const cartItems = useSelector((store)=>store.cart.items)
  
  const dispatch = useDispatch();
  const handleClearCart = () =>{
      dispatch(clearCart())
  }

  return (
    <div className="text-center m-4 p-4">
      <h1 className="font-bold text-xl">
        Cart
      </h1>
      <button className="m-4 p-2 rounded-lg bg-black text-white"
      onClick={handleClearCart}>
        Clear Cart
      </button>
      {cartItems.length === 0 && <h1>YOUR CART IS EMPTY !!</h1>}
      <div className="w-6/12 m-auto">
        <ItemList items={cartItems} />
      </div>
    </div>
  )
}

export default Cart