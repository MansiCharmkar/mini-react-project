import Card from "./components/card";
import "./index.css";
import TextExpander from "./components/TextExpander";
import DateCounter from "./components/DateCounter";
import StarRating from "./components/StarRating";
import Accordian from "./components/Accordian";
import AccordionV2 from "./components/AccordionV2";
import AccordionV3 from "./components/AccordionV3";

const appStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // marginTop: "10rem",
    padding: "4rem 0",
    flexDirection: "column",
    gap: "4rem",
};

const accordionContents = [
    {
        title: "About Hiper-Text-Markup-Language",
        details:
            "Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content.",
    },
    {
        title: "About Casceding-Style-Sheet",
        details:
            "Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.",
    },
    {
        title: "About Java-Script",
        details:
            "JavaScript (JS) is a lightweight interpreted (or just-in-time compiled) programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.",
    },
    {
        title: "About React",
        details:
            "React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.",
    },
];
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
            <Accordian content={accordionContents} color="#2f9e44" />
            <AccordionV2 content={accordionContents} color="#2f9e44" />
            <AccordionV3 content={accordionContents} color="#2f9e44" />
        </div>
    );
}

export default App;
