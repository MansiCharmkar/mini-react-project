import { useState } from "react";
import styles from "../style/Accordian.module.css";
import { HiMiniMinus, HiMiniPlus } from "react-icons/hi2";
function Accordian(props) {
    const { content, color } = props;
    const [open, setOpen] = useState(null);

    // open == null > all closed

    // curr index
    // 1 1 => null
    // 1 2 => 2

    function handleClick(index) {
        setOpen((currState) => (currState === index ? null : index));
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
                        isOpen={open === index}
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
export default Accordian;
