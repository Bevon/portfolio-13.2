import { useState, useEffect } from "react";
import styles from "@/styles/Timer.module.css";
import { format } from "date-fns";

function DateTime() {
  const [day, setDay] = useState("");
  function getTheDate() {
    // setDay(toDate(Date.now()).toString())
    setDay(format(new Date(Date.now()), "dd MMMM yyyy"));
  }
  useEffect(
    function () {
      getTheDate();
    },
    [day]
  );
  return (
    <div className={styles.timer}>
      <p className={[styles.date, styles.day]}>
        Today is <b className={styles.day}>{day}</b>
      </p>
    </div>
  );
}

export default DateTime;
