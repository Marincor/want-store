import { Typography } from "@mui/material";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import searchStore from "../../../components/actions/dataItem/search";
import Header from "../../../components/Header";
import Items from "../../../components/Items";
import LoadingAnimation from "../../../components/LoadingAnimation";

export default function Products() {
  const state = useSelector((state) => state);

  const router = useRouter();

  useEffect(() => {
    searchStore(state.search);
  }, [router.query.search]);



  function errorRequest() {
    setTimeout(() => {
      router.push("/404");
    }, 5000);

    return (
      <Typography variant="h4" component="h2">
        The quota for Ali Express Api Search has Exceeded...
      </Typography>
    );
  }

  return (
    <div>
      <Head>
        <title>I Want - search</title>
        <meta name="description" content="Make a wish, get your desire!" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </Head>

      <body>
        <Header />
        {state.items.message ? errorRequest() : false}
        {state.loading ? (
          <>
            <LoadingAnimation />
          </>
        ) : (
          <Items item={state?.items} />
        )}
      </body>
    </div>
  );
}
