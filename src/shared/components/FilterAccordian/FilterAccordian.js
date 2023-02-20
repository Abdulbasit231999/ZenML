import { List, ListItemButton, ListItemText } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import CheckboxList from "./CheckboxList";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import styles from "./FilterAccordian.module.scss";

export function FilterAccordian({
  filterName,
  filterList,
  reset = false,
  setReset,
}) {
  /* It is a reusable filter component, its state will 
     be manage form parents component on the basis of requirement
  */
  const [toggle, setToggle] = useState({});
  const [selectedFilters, setSelectedFilters] = useState({});

  const handleToggle = (value) => {
    setToggle({ [value]: !toggle[value] });
  };

  /* Use callback is utilized to memorize the function
     and recreate only when the selected filter states chnages
  */
  const handleChecked = useCallback(
    (_, value) => {
      console.log("value: ", value);
      const lastUpdatedState = {
        ...selectedFilters,
        [value.id]: { ...value, checked: true },
      };
      if (value.id in selectedFilters) {
        delete lastUpdatedState[value.id];
        return setSelectedFilters(lastUpdatedState);
      }
      return setSelectedFilters(lastUpdatedState);
    },
    [selectedFilters]
  );

  useEffect(() => {
    if (reset) {
      setSelectedFilters({});
      setReset(false);
    }
  }, [reset]);
  return (
    <div>
      <List disablePadding>
        <ListItemButton onClick={() => handleToggle(filterName)} disableGutters>
          <ListItemText
            className={styles["filter-name"]}
            primary={filterName}
          />
          {toggle[filterName] ? (
            <ArrowDropUpIcon color="primary" />
          ) : (
            <ArrowDropDownIcon color="primary" />
          )}
        </ListItemButton>
        <CheckboxList
          open={toggle[filterName]}
          listItem={filterList}
          selectedFilter={selectedFilters}
          handleChecked={handleChecked}
        />
      </List>
    </div>
  );
}

React.memo(FilterAccordian);
