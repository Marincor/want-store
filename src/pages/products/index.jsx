
import Head from "next/head";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import itemsStore from "../../components/actions/dataItem";
import Header from "../../components/Header";
import Items from "../../components/Items";
import LoadingAnimation from "../../components/LoadingAnimation";

export default function Products() {
  const state = useSelector((state) => state);

  useEffect(() => {
    itemsStore();
  }, []);

  return (
    <div>
      <Head>
        <title>I Want - Products</title>
        <meta name="description" content="Make a wish, get your desire!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body>
        <Header />
        
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
