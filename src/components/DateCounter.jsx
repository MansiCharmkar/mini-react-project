import { useState } from "react";
import styles from "../style/DateCounter.module.css";

const today = new Date();

function formateDate(date) {
    return date.toLocaleDateString("en-IN", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

function addDays(date, days) {
    const newDate = new Date();
    newDate.setDate(date.getDate() + days);
    return newDate;
}

function isNumber(str) {
    return !isNaN(Number(str));
}

function getPrefix(dayCount) {
    let prefix = "";
    if (dayCount === "0" || dayCount === "-") prefix = "today is";
    else if (+dayCount > 0) prefix = `${+dayCount} days after`;
    else if (+dayCount < 0) prefix = `${+dayCount * -1} days before`;
    return prefix;
}

// controlled Element
const DateCounter = () => {
    const [step, setStep] = useState(1);
    const [dayCount, setdayCount] = useState("0");

    // "-" || Numbers

    // derived state
    const currentDate = addDays(today, Number(dayCount === "-" ? 0 : dayCount));

    const prefix = getPrefix(dayCount);

    function handleReset() {
        setStep(1);
        setdayCount("0");
    }

    function handleStepChange(e) {
        setStep(Number(e.target.value));
    }

    function handleDayCountChange(e) {
        const value = e.target.value;
        if (isNumber(value) || value === "-") setdayCount(value);
    }

    function plusDayCount() {
        if (isNumber(dayCount))
            setdayCount((dayCount) => `${Number(dayCount) + step}`);
    }

    function minusDayCount() {
        if (isNumber(dayCount)) setdayCount((dayCount) => `${dayCount - step}`);
    }

    return (
        <div className={styles.container}>
            <div className={styles.rangeBox}>
                <input
                    type="range"
                    min="1"
                    max="10"
                    value={step}
                    onChange={handleStepChange}
                />
                <span>{step}</span>
            </div>
            <div className={styles.buttonBox}>
                <button className={styles.btn} onClick={minusDayCount}>
                    -
                </button>
                <input
                    type="text"
                    value={dayCount}
                    onChange={handleDayCountChange}
                />
                <button className={styles.btn} onClick={plusDayCount}>
                    +
                </button>
            </div>
            <p className={styles.text}>
                {prefix}:{formateDate(currentDate)}
            </p>
            <button onClick={handleReset} className={styles.btn}>
                Reset
            </button>
        </div>
    );
};

export default DateCounter;
