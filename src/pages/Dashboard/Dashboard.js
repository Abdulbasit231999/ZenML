import { Button } from "@mui/material";
import { FilterAccordian } from "shared/components";
import { deployedFilterList, trustedContentList, typeFilterList } from "./mock";
import styles from "./Dashboard.module.scss";
import { useState } from "react";
import { ListBox } from "components";

export function Dashboard() {
  const [reset, setReset] = useState(false);
  return (
    <div className={styles["main-container"]}>
      <div className={styles["sub-container-left"]}>
        <div className={styles["heading"]}>
          <span>Filters</span>
          <Button onClick={() => setReset(true)}>Clear all</Button>
        </div>
        <div className={styles["filter-section"]}>
          <FilterAccordian
            filterName="Types"
            filterList={typeFilterList}
            reset={reset}
            setReset={setReset}
          />
          <FilterAccordian
            filterName="Trusted Content"
            filterList={trustedContentList}
            reset={reset}
            setReset={setReset}
          />
          <FilterAccordian
            filterName="Deployed"
            filterList={deployedFilterList}
            reset={reset}
            setReset={setReset}
          />
        </div>
      </div>
      <div className={styles["sub-container-right"]}>
        <div>RESULT 67 packages</div>
        <div>
          <ListBox />
        </div>
      </div>
    </div>
  );
}
