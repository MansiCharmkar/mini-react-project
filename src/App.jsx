import Card from "./components/card";
import "./index.css";
import TextExpander from "./components/TextExpander";
import DateCounter from "./components/DateCounter";
import StarRating from "./components/StarRating";

const appStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // marginTop: "10rem",
    padding: "4rem 0",
    flexDirection: "column",
    gap: "4rem",
};

function App() {
    return (
        <div style={appStyle}>
            <Card />
            <TextExpander />
            <DateCounter />
            <div>
                <StarRating color="#7048e8" defaultRating={3} size={5} />
                <StarRating color="#d6336c" defaultRating={4} size={10} />
                <StarRating color="#fab005" defaultRating={5} size={15} />
            </div>
        </div>
    );
}

export default App;
