import React from "react";
import Logo from "assets/images/logo.svg";
import { SearchAutocomplete } from "shared/components";
import { Button, Grid } from "@mui/material";
import styles from "./Header.module.scss";

export function Header() {
  return (
    <div className={styles["header-container"]}>
      <Grid container justifyContent={"space-between"} spacing={3}>
        <Grid item xs={2}>
          <img src={Logo} alt="logo" />
        </Grid>
        <Grid item xs={7} display={"flex"} justifyContent={"space-between"}>
          <SearchAutocomplete />
          <Button style={{ fontWeight: 400 }} color="primary">
            {" "}
            Dashboard
          </Button>
          <Button> Sign in</Button>
        </Grid>
      </Grid>
    </div>
  );
}
