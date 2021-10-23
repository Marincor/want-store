import styles from "../../styles/Banner/Banner.module.css";
import { ColorButton } from "./styles";
import { Typography } from "@mui/material";
import { useRouter } from "next/dist/client/router";

export default function Banner() {

const router = useRouter();



  return (
    <section className={styles.banner}>
      <div className={styles.banner__content}>
        <Typography
          variant="h2"
          component="h2"
          color="white"
          fontFamily="-moz-initial"
        >
          {" "}
          SLIGHT AND{" "}
        </Typography>

        <Typography
          variant="h3"
          component="h2"
          color="black"
          fontFamily="-moz-initial"
        >
          {" "}
          BREATHING...{" "}
        </Typography>
        <ColorButton variant="contained" onClick={() => { router.push("/products") }}>Shop now</ColorButton>
      </div>
    </section>
  );
}
