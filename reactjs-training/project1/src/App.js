import "./App.css";
import Addemployeeredux from "./components/Day13/AddEmployeeRedux";
import DemoHOC from "./components/Day13/DemoHOC";
import Contextdemo from "./components/Day14/ContextDemo";
import Reduxcounter from "./components/Day14/ReduxCounter";
import Tagliterals from "./components/Day14/TagLiterals";
import Assignment1router from "./routes/Assignment1Router";
import Assignment2router from "./routes/Assignment2Router";
import Routerd12 from "./routes/RouterD12";

function App() {
    return (
        <div className="App">
            <div className="row">
                {/* <Assignment1router /> */}
                {/* <Assignment2router /> */}
                {/* <Routerd12 /> */}
                {/* <DemoHOC /> */}
                {/* <Addemployeeredux /> */}
                {/* <Reduxcounter /> */}
                {/* <Tagliterals /> */}
                <Contextdemo />
            </div>
        </div>
    );
}

export default App;
