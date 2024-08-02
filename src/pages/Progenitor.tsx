import Navbar from "../components/Navbar.tsx";
import Progenitors from "../components/Progenitors.tsx";

function Progenitor() {

    return (
        <div className="">
            <h1>Warframe Adversary Weapon Tracker</h1>
            <h3>Progenitors:</h3>
            <Navbar/>
            <Progenitors/>
        </div>
    );
}

export default Progenitor;