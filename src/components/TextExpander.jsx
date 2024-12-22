import React, { useState } from "react";

const textStyle = {
    maxWidth: "40rem",
};
const btnContainer = {
    paddingTop: "1rem",
    display: "flex",
    justifyContent: "space-between",
};
const btnStyle = {
    padding: "0.5rem 1rem",
    border: "none",
    backgroundColor: "#ae3ec9",
    borderRadius: "1rem",
    color: "white",
    cursor: "pointer",
};
const rawText = ` Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
                officia iure voluptatibus velit debitis dignissimos id, sunt ab,
                dolorum quia suscipit consequatur labore facilis minima
                blanditiis aspernatur beatae minus molestias. Ex deserunt nemo
                exercitationem magni quibusdam et consectetur odit sunt
                obcaecati assumenda sapiente corporis beatae eaque provident ad
                accusamus, quisquam itaque sed unde minus magnam molestiae
                voluptatibus nihil saepe. Doloribus? Vero repudiandae non
                consequuntur, molestias, maiores amet accusantium nulla sint,
                dolores iusto obcaecati natus beatae molestiae nihil saepe enim
                possimus vel dignissimos expedita labore quasi? Ratione,
                pariatur nihil? Similique, dicta. Sint, deserunt eius
                praesentium illum in vero unde explicabo, nemo fuga accusantium
                itaque atque ab, animi assumenda cum expedita recusandae
                excepturi. Doloremque quae quam dolorum est ullam voluptate,
                quia tempora! Eius ducimus autem ratione velit, culpa illum
                laborum eligendi inventore iure vitae atque, suscipit magni
                quaerat voluptates in veniam! Officiis qui error sapiente
                voluptates ex earum cum architecto accusamus perferendis!
                Laudantium sit consectetur totam deserunt. `;

const TextExpander = () => {
    const [show, setShow] = useState(false);
    const text = show ? rawText : rawText.slice(0, 150);
    function handleClick() {
        setShow((show) => !show);
    }
    return (
        <div>
            <p style={textStyle}>{text}</p>
            <div style={btnContainer}>
                <button onClick={handleClick} style={btnStyle}>
                    {show ? `Show Less` : `Show More`}
                </button>
            </div>
        </div>
    );
};

export default TextExpander;
