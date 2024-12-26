import { useState } from "react";
import style from "../style/Accordian.module.css";
function Accordian(props) {
    const { content, color } = props;
    const [open, setOpen] = useState(false);
    return (
        <div>
            {content.map(function (content, index) {
                return (
                    <Row
                        title={content.title}
                        details={content.details}
                        key={index}
                    />
                );
            })}
        </div>
    );
}
function Row(props) {
    const { title, details } = props;
    return (
        <div>
            <h3>{title}</h3>
            <p>{details}</p>
        </div>
    );
}
export default Accordian;
