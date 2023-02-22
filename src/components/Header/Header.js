import React from "react";
import Logo from "assets/images/logo.svg";
import { SearchAutocomplete } from "shared/components";
import { Button, Grid } from "@mui/material";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <div className={styles["header-container"]}>
      <Grid container justifyContent={"space-between"} spacing={3}>
        <Grid item xs={2}>
          <Link to={"/"}>
            <img src={Logo} alt="logo" />
          </Link>
        </Grid>
        <Grid item xs={7}>
          <Grid container display={"flex"} justifyContent={"space-between"}>
            <Grid item xs={8}>
              <SearchAutocomplete />
            </Grid>
            <Grid item xs={3} display={"flex"} justifyContent={"space-between"}>
              <Button style={{ fontWeight: 400 }} color="primary">
                Dashboard
              </Button>
              <Button> Sign in</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
