import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import styles from "../../styles/Products/Products.module.css";
import { Typography } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import IconButton from "@mui/material/IconButton";
import CarouselItem from "../../components/Items/Carousel/index";
import CountAmount from "../../components/Count";
import { useSelector } from "react-redux";
import getCurrentItems from "../../components/actions/currentItem";
import LoadingAnimation from "../../components/LoadingAnimation";
import { addToCart } from "../../components/actions/currentOrder";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function ProductByID() {
  const router = useRouter();

  const [slideImage, setSlideImage] = useState(0);

  const state = useSelector((state) => state);

  useEffect(() => {
    const id = router.query.id;

    getCurrentItems(id);
  }, []);

  console.log(state.currentItem)

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
            <>
              <Typography variant="caption" component="h2">
                {" "}
                loading...
              </Typography>
              <LoadingAnimation />
            </>
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
                <IconButton
                  color="success"
                  aria-label="add to shopping cart"
                  onClick={() => {
                    addToCart(
                      state,
                      state.currentItem?.product_title,
                      state.currentItem?.product_small_image_urls?.string[
                        slideImage
                      ],
                      state.amount,
                      state.currentItem?.sale_price,
                      state.currentItem?.product_id
                    );
                  }}
                >
                  <Typography variant="button" component="span"> add to cart </Typography>
                  {" ⠀"}
                  <AddShoppingCartIcon />
                </IconButton>
              </div>
            </>
          )}
        </div>
        <IconButton
          color="success"
          aria-label="add to shopping cart"
          onClick={() => {
            router.push("/products");
          }}
        >
          <Typography> products </Typography>
          {" ⠀"}
          <ArrowBackIcon />
        </IconButton>
      </body>
    </div>
  );
}
