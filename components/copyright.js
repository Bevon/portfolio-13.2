import styles from "@/styles/Home.module.css";
import { format } from "date-fns";

function Copyright() {
  return (
    <div className={styles.outerDiv}>
      <div className={styles.copyright}>
        <p>{format(new Date(Date.now()), "MMMM yyyy")}. All rights reserved.</p>
      </div>
    </div>
  );
}
export default Copyright;
