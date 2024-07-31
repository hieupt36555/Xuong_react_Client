// import axios from "axios";
import {  useState } from "react";
import Banner from "src/components/Banner";
import Loading from "src/components/Loading";
import NewShopHome from "src/components/NewShopHome";

function Homepage() {
  const [loading] = useState<boolean>(false);

  // const getAllProduct = async () => {
  //   try {
  //     setLoading(true);
  //     const { data } = await axios.get("http://localhost:3000/products");
  //     setProducts(data);
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  // useEffect(() => {
  //   getAllProduct();
  // }, []);

  return (
    <>
      <Loading isShow={loading} />
      {/* <Stack
        direction={"row"}
        flexWrap={"wrap"}
        gap={2}
        alignItems={"center"}
        justifyContent={"center"}
      >
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </Stack> */}
      <Banner/>
      <NewShopHome/>
    </>
  );
}

export default Homepage;
