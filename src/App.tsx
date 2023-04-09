import "./App.css";
import Drawer from "./features/drawer/Drawer";
import Router from "./router/router";

function App() {
    return (
        <div className="App">
            <Drawer />
            <Router />
        </div>
    );
}

export default App;
