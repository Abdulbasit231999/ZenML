import { Button } from "@mui/material";
import { FilterAccordian } from "shared/components";
import {
  deployedFilterList,
  listData,
  trustedContentList,
  typeFilterList,
} from "./mock";
import styles from "./Dashboard.module.scss";
import { useState } from "react";
import { ListBox } from "components";
import { Link } from "react-router-dom";
import { ROUTES } from "utils/routes";

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
          <FilterAccordian
            filterName="Favourite"
            filterList={deployedFilterList}
            reset={reset}
            setReset={setReset}
          />
        </div>
      </div>
      <div className={styles["sub-container-right"]}>
        <div className={styles["sub-container-right-heading"]}>
          RESULTS <span data-package-count>{listData.length}</span> packages
        </div>
        <div className={styles["list-items"]}>
          {listData.map((data) => (
            <Link to={`/product-details/${data.id}`}>
              <ListBox
                key={data.id}
                description={data.desciptions}
                heading={data.heading}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
