import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";


export function getStaticProps() {


  return { props: { numero: Math.round(Math.random() * 25), content: "HomePage" } }


}


export default function Home(props) {

console.log(props.numero)
console.log(props.content)

  return (
    <div className={styles.container}>
      <Head>
        <title>I Want...</title>
        <meta name="description" content="Make a wish, get your desire!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body className={styles.body}>
        <Header />

        <Banner />
      </body>
    </div>
  );
}
