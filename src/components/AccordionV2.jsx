import { useState } from "react";
import styles from "../style/Accordian.module.css";
import { HiMiniMinus, HiMiniPlus } from "react-icons/hi2";
function AccordionV2(props) {
    const { content, color } = props;
    const [open, setOpen] = useState([false, false, false, false]);

    // open == null > all closed

    // curr index
    // 1 1 => null
    // 1 2 => 2

    function handleClick(index) {
        setOpen(function (currState) {
            currState[index] = !currState[index];
            return [...currState];
        });
    }

    return (
        <div className={styles.container}>
            {content.map(function (content, index) {
                return (
                    <Row
                        title={content.title}
                        details={content.details}
                        handleClick={handleClick}
                        index={index}
                        isOpen={open[index]}
                        key={index}
                    />
                );
            })}
        </div>
    );
}
function Row(props) {
    const { title, details, handleClick, index, isOpen } = props;
    return (
        <div onClick={() => handleClick(index)} className={styles.row}>
            <h3 className={styles.title}>
                <span>
                    {title} {isOpen ? <HiMiniMinus /> : <HiMiniPlus />}
                </span>
            </h3>
            {isOpen && <p className={styles.details}>{details}</p>}
        </div>
    );
}
export default AccordionV2;
