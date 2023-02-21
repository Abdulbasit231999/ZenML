import React from "react";
import Dummy from "assets/images/dummy.svg";
import { getTimeElpased } from "utils/helper";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import styles from "./ListBox.module.scss";
import { Chip } from "@mui/material";
import CountBox from "./CountBox";
import { Sparklines, SparklinesLine } from "react-sparklines";

export function ListBox({ heading, description }) {
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
          <div className={styles["chips"]}>
            {Array(5)
              .fill()
              .map((_, index) => (
                <Chip label="Designer" variant="filled" />
              ))}
          </div>
        </div>
      </div>
      <hr className={styles["divider"]} />
      <div className={styles["list-box-right-container"]}>
        <div className={styles["count-section"]}>
          <CountBox mainText={"10M+"} subText={"Upvotes"} />
          <CountBox mainText={"10K+"} subText={"Downloads"} />
          <CountBox mainText={"99%"} subText={"Popularity"} />
        </div>
        <div className={styles["data-section"]}>
          <span data-pull-count>Pulls: 8,807,087</span>
          <span data-time-span>Last week</span>
          <Sparklines
            data={[5, 10, 5, 20, 8, 15, 20, 25]}
            limit={10}
            width={300}
            height={30}
            margin={5}
          >
            <SparklinesLine color="blue" />
          </Sparklines>
        </div>
      </div>
    </div>
  );
}
