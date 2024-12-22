import { useState } from "react";

// parent --> [state] --> child
const cardStyle = {
    backgroundColor: "#e9ecef",
    height: "fit-content",
    padding: "2rem",
    borderRadius: "1rem",
    border: "2px solid gray",
};

const numStyle = {
    height: "3rem",
    width: "3rem",
    borderRadius: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
};

const activeBtn = {
    backgroundColor: "#ae3ec9",
    color: "white",
};

const numsContents = {
    display: "flex",
    // alignItems: "center",
    // width: "100%",
    justifyContent: "space-between",
    gap: "2rem",
    marginBottom: "2rem",
};
const messageStyle = {
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "2rem",
};

const btnContainer = {
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

const messages = [
    "😎 Learn HTML",
    "🐳 Learn CSS",
    "💪 JavaScript",
    "🤑 Learn React",
];

function Card() {
    const [steps, setSteps] = useState(1);

    function minusSteps() {
        if (steps === 1) return;
        setSteps(steps - 1);
        // console.log(steps);
    }
    function plusSteps() {
        if (steps === 4) return;
        setSteps(steps + 1);
        // console.log(steps);
    }

    return (
        <div style={cardStyle}>
            <ul style={numsContents}>
                <div
                    style={
                        steps >= 1 ? { ...numStyle, ...activeBtn } : numStyle
                    }
                >
                    <span>1</span>
                </div>
                <div
                    style={
                        steps >= 2 ? { ...numStyle, ...activeBtn } : numStyle
                    }
                >
                    <span>2</span>
                </div>
                <div
                    style={
                        steps >= 3 ? { ...numStyle, ...activeBtn } : numStyle
                    }
                >
                    <span>3</span>
                </div>
                <div
                    style={
                        steps >= 4 ? { ...numStyle, ...activeBtn } : numStyle
                    }
                >
                    <span>4</span>
                </div>
            </ul>
            <p style={messageStyle}>{messages[steps - 1]}</p>
            <div style={btnContainer}>
                <button style={btnStyle} onClick={minusSteps}>
                    Previous
                </button>
                <button style={btnStyle} onClick={plusSteps}>
                    Next
                </button>
            </div>
        </div>
    );
}
export default Card;
