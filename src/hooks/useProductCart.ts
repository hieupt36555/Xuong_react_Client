import axios from "axios";
import { useCart } from "src/contexts/cart";
import { useUser } from "src/contexts/user";
import { Product } from "src/types/Product";

type AddToCart = {
  product: Product;
  quantity: number;
};

export function useProductCart() {
  const { user } = useUser();
  const { cart, setCart } = useCart();


  const getCartUser = async () => {
    if (!user) return;
    const { data } = await axios.get(`https://xuong-react-server-2.onrender.com/carts/user/${user._id}`);
    setCart(data);
  };

  const addToCart = async ({ product, quantity }: AddToCart) => {
    if (!user) return;
    if (!cart) {
      try {
        await axios.post("https://xuong-react-server-2.onrender.com/carts", {
          product,
          quantity,
          user: user._id,
        });
        getCartUser();
      } catch (error) {}
    } else {
      try {
        await axios.put(`https://xuong-react-server-2.onrender.com/carts/${cart._id}`, {
          product,
          quantity,
          user: user._id,
        });
        getCartUser();
      } catch (error) {}
    }
  };

  const removeToCart = async (productId: string) => {
    if (!user) return;
    // if (window.confirm("Remove Item Cart")) {
      try {
        await axios.delete(`https://xuong-react-server-2.onrender.com/carts/user/${user._id}/product/${productId}`);
        getCartUser();
      } catch (error) {
        console.log(error);
      }
    // }
  };
// console.log(cart);

  return {
    getCartUser,
    addToCart,
    removeToCart,
  };
}
