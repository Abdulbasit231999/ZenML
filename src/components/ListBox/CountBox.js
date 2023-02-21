import styles from "./ListBox.module.scss";

function CountBox({ mainText, subText }) {
  return (
    <div className={styles["count-box-main"]}>
      <span data-main-text>{mainText}</span>
      <span data-sub-text>{subText}</span>
    </div>
  );
}

export default CountBox;
