import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Kuva from "./pages/Kuva.tsx";
import Tenet from "./pages/Tenet.tsx";
import Progenitor from "./pages/Progenitor.tsx";
import Requiem from "./pages/Requiem.tsx";
import Valence from "./pages/Valence.tsx";

function App() {

    document.addEventListener('contextmenu', event => event.preventDefault());

    return (
        <Router>
            <Routes>
                <Route path={"/"} element={<Kuva />} />
                <Route path={"/tenet"} element={<Tenet />} />
                <Route path={"/progenitors"} element={<Progenitor/>} />
                <Route path={"/requiem"} element={<Requiem/>} />
                <Route path={"/valence"} element={<Valence/>} />
            </Routes>
        </Router>
    );
}

export default App;
