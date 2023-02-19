import React from "react";
import { Outlet } from "react-router";
import { Header } from "components";
import styles from "./BaseLayout.module.scss";

export function BaseLayout() {
  return (
    <div className={styles["container"]}>
      <Header />
      <Outlet />
    </div>
  );
}
