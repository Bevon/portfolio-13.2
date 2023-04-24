import styles from "@/styles/Home.module.css";
import { format } from "date-fns";

function Copyright() {
  return (
    <div className={styles.copyright}>
      <p>
        <copyright>
          {format(new Date(Date.now()), "MMMM yyyy")}. All rights reserved.
        </copyright>
      </p>
    </div>
  );
}
export default Copyright;
