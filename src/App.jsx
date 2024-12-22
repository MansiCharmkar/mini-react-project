import Card from "./components/card";
import "./components/index.css";

const appStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // marginTop: "10rem",
    height: "100vh",
};

function App() {
    return (
        <div style={appStyle}>
            <Card />
        </div>
    );
}

export default App;
