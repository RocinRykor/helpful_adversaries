import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Kuva from "./pages/Kuva.tsx";
import Tenet from "./pages/Tenet.tsx";
import Progenitor from "./pages/Progenitor.tsx";

function App() {

    return (
        <Router>
            <Routes>
                <Route path={"/"} element={<Kuva />} />
                <Route path={"/tenet"} element={<Tenet />} />
                <Route path={"/progenitors"} element={<Progenitor/>} />
            </Routes>
        </Router>
    );
}

export default App;
