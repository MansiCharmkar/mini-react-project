import Card from "./components/card";
import "./index.css";
import TextExpander from "./components/TextExpander";

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
        </div>
    );
}

export default App;
