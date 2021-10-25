import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import getItemByID from "../../services/api/itemById";
import styles from "../../styles/Products/Products.module.css";
import { Typography } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import IconButton from "@mui/material/IconButton";
import CarouselItem from "../../components/Items/Carousel/index";

export default function ProductByID() {
  const router = useRouter();

  const [currentItem, setCurrentItem] = useState(null);
  const [slideImage, setSlideImage] = useState(0);

  useEffect(() => {
    const id = router.query.id;

    try {
      console.log(id);
      getItemByID(id).then((data) => setCurrentItem(data));
    } catch (error) {
      console.log(error);
    } finally {
      console.log("finish");
    }
  }, [currentItem !== null]);

  console.log(currentItem);

  return (
    <div>
      <Head>
        <title>I Wanna - Products</title>
        <meta name="description" content="Make a wish, get your desire!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body>
        <Header />
        <div className={styles.container}>
          <div className={styles.containterImg}>
            <img
              className={styles.imgProduct}
              src={`${currentItem?.product_small_image_urls?.string[slideImage]}?w=500&fit=crop&auto=format`}
              srcSet={`${currentItem?.product_small_image_urls?.string[slideImage]}?w=500&fit=crop&auto=format&dpr=2 2x`}
              alt={currentItem?.product_title}
              loading="lazy"
            />
            <CarouselItem
              item={currentItem?.product_small_image_urls || null}
              setSlideImage={setSlideImage}
              alt={currentItem?.product_title}
            />
          </div>

          <div className={styles.containerInfo}>
            <Typography variant="caption" component="h3" color="GrayText">
              {currentItem?.product_title}
            </Typography>

            <Typography variant="subtitle1" component="h3" fontWeight="bold">
              $ {currentItem?.sale_price}
            </Typography>
            <IconButton color="success" aria-label="add to shopping cart">
              <Typography> add to cart </Typography>
              {" ⠀"}
              <AddShoppingCartIcon />
            </IconButton>
          </div>
        </div>
      </body>
    </div>
  );
}
