import React from "react";
import Dummy from "assets/images/dummy.svg";
import { getTimeElpased } from "utils/helper";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import styles from "./ListBox.module.scss";
import { Chip } from "@mui/material";

export function ListBox() {
  return (
    <div className={styles["list-box-main-container"]}>
      <div className={styles["list-box-left-container"]}>
        <img src={Dummy} alt="dummy" />
        <div>
          <div className={styles["heading"]}>
            <h4>Flavour</h4>
            <VerifiedOutlinedIcon color="primary" />
          </div>
          <span className={styles["time-elapsed"]}>{`Updated ${getTimeElpased(
            "2023-02-15"
          )}`}</span>
          <p className={styles["description"]}>
            Scalable, secure, and reliable cloud infrastructure for modern
            businesses.Scalable, secure, and reliable cloud infrastructure for
            business
          </p>
          <div>
            {Array(5)
              .fill()
              .map((_, index) => (
                <Chip label="Designer" variant="filled" />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
