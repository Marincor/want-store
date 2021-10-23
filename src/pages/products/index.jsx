import Head from "next/head";
import Header from '../../components/Header'
import Items from "../../components/Items";

export default function Products() {
    return (
      <div>
        <Head>
          <title>I Wanna - Products</title>
          <meta name="description" content="Make a wish, get your desire!" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <body >
          <Header />
            <Items />
     
        </body>
      </div>
    );
  }
  