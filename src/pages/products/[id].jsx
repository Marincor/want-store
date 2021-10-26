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
import CountAmount from "../../components/Count";
import { useSelector } from "react-redux";
import { store } from "../../store";
import getCurrentItems from "../../components/actions/dataItem/currentItem";
import LoadingAnimation from "../../components/LoadingAnimation";

export default function ProductByID() {
  const router = useRouter();

  const [slideImage, setSlideImage] = useState(0);

  const state = useSelector((state) => state);

  useEffect(() => {
    const id = router.query.id;

    getCurrentItems(id);
  }, []);


  
  return (
    <div>
      <Head>
        <title>I Wanna - Product</title>
        <meta name="description" content="Make a wish, get your desire!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body>
        <Header />
        <div className={styles.container}>
          {state.loading ? (
            <LoadingAnimation />
          ) : (
            <>
              <div className={styles.containterImg}>
                <img
                  className={styles.imgProduct}
                  src={`${state.currentItem?.product_small_image_urls?.string[slideImage]}?w=500&fit=crop&auto=format`}
                  srcSet={`${state.currentItem?.product_small_image_urls?.string[slideImage]}?w=500&fit=crop&auto=format&dpr=2 2x`}
                  alt={state.currentItem?.product_title}
                  loading="lazy"
                />
                <CarouselItem
                  item={state.currentItem?.product_small_image_urls || null}
                  setSlideImage={setSlideImage}
                  alt={state.currentItem?.product_title}
                />
              </div>

              <div className={styles.containerInfo}>
                <Typography variant="caption" component="h3" color="GrayText">
                  {state.currentItem?.product_title}
                </Typography>

                <Typography
                  variant="subtitle1"
                  component="h3"
                  fontWeight="bold"
                >
                  $ {state.currentItem?.sale_price}
                </Typography>
                <CountAmount />
                <IconButton color="success" aria-label="add to shopping cart">
                  <Typography> add to cart </Typography>
                  {" ⠀"}
                  <AddShoppingCartIcon />
                </IconButton>
              </div>
            </>
          )}
        </div>
      </body>
    </div>
  );
}
