import styles from "../../styles/Banner/Banner.module.css";
import { ColorButton } from "./styles";
import { flexbox } from "@mui/system";
import { Typography } from "@mui/material";

export default function Banner() {
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
        <ColorButton variant="contained">Shop now</ColorButton>
      </div>
    </section>
  );
}
