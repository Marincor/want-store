import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";


export function getStaticProps() {


  return { props: {  content: "HomePage" } }


}


export default function Home(props) {

console.log(props.content)

  return (
    <div className={styles.container}>
      <Head>
        <title>I Want...</title>
        <meta name="description" content="Make a wish, get your desire!" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </Head>

      <body className={styles.body}>
        <Header />

        <Banner />
      </body>
    </div>
  );
}
