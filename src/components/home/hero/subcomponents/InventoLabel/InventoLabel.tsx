import React from "react";

//styles
import styles from "./InventoLabel.module.scss";

//images
import inventolabel from "../../../../../assets/images/InventoLabel.svg";

interface containerProps {
  inventolabel: string;
}

const InventoLabel = () => {
  return (
    <div className={styles.invento__label}>
      <div>
        <img src={inventolabel} alt="invento label" />
      </div>
    </div>
  );
};

export default InventoLabel;
