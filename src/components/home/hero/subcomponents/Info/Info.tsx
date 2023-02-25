import React from "react";

//styles
import styles from "./Info.module.scss";

const Info = () => {
  return (
    <div className={styles.info__main}>
      <p>
        Born in the year <br />
        2012,INVENTO is the national <br />
        level annual techno- <br />
        management festival of <br />
        Government Engineering <br />
        College Palakkad.
      </p>
    </div>
  );
};

export default Info;
