import { Box, Typography } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "src/components/footer";
import Header from "src/components/Header";
import Loading from "src/components/Loading";
import { useCart } from "src/contexts/cart";
import { useLoading } from "src/contexts/loading";
import { useUser } from "src/contexts/user";

function ClientLayout() {
  const { loading } = useLoading();
  const { setCart } = useCart();
  const { setUser } = useUser();

  const getAllCarts = async () => {
    try {
      const userStorage = localStorage.getItem("user") || "{}";
      const user = JSON.parse(userStorage);
      setUser(user);

      if (!user) return;
      const { data } = await axios.get(`/carts/user/${user._id}`);
      console.log(data);
      setCart(data);
    } catch (error) { }
  };

  useEffect(() => {
    getAllCarts();
  }, []);

  return (
    <>
      <Box>
        <Typography>
          <Loading isShow={loading} />
          <Header />
          <Box>
            <Outlet />
          </Box>
          <Footer />
        </Typography>
        
      </Box>
    </>
  );
}

export default ClientLayout;
