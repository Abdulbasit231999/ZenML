import { Checkbox, Collapse, FormControlLabel, ListItem } from "@mui/material";
import styles from "./FilterAccordian.module.scss";

function CheckboxList({
  open,
  listItem = [],
  selectedFilter = {},
  handleChecked,
}) {
  return (
    <div>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {listItem.map((item, index) => (
          <ListItem
            key={index}
            disableGutters
            disablePadding
            className={styles["checkbox-list"]}
          >
            <FormControlLabel
              control={<Checkbox size="small"/>}
              label={item.lable}
              value={item.id}
              checked={selectedFilter[item.id]?.checked === true}
              onChange={(e) => handleChecked(e, item)}
            />
          </ListItem>
        ))}
      </Collapse>
    </div>
  );
}

export default CheckboxList;
