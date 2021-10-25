import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import styles from "../../styles/Header/Header.module.css";
import bask from "../../../public/assets/img/bask.png";
import Images from "next/image";
import ModalCart from "../Cart/Modal";
import { Search, SearchIconWrapper, StyledInputBase } from "./styles";
import { useRouter } from "next/dist/client/router";

export default function PrimarySearchAppBar() {

  const router = useRouter()

  

  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" color="inherit" className={styles.header}>
        <Toolbar >
          <div className={styles.container}  onClick={(e) =>{ router.push("/")}}>
        <Images src={bask} alt="iWanna-icon"  className="iconBask" width="20px" height="20px" />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
            className={styles.title}
           
            >
           I
            Wanna . . .
          </Typography>
            </div>
          <Search>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
          </Search>
          <ModalCart />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
