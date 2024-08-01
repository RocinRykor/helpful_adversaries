import Navbar from "../components/Navbar.tsx";
import Weapons from "../components/Weapons.tsx";
import {kuva} from "../static/weapons.tsx";


function Kuva() {

    return (
        <div className="">
            <h1>Warframe Adversary Weapon Tracker</h1>
            <h3>Kuva Lich Weapons:</h3>
            <Navbar/>
            <Weapons weaponsList={kuva}/>
        </div>
    );
}

export default Kuva;