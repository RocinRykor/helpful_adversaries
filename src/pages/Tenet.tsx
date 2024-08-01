import Navbar from "../components/Navbar.tsx";
import Weapons from "../components/Weapons.tsx";
import {tenet} from "../static/weapons.tsx";


function Tenet() {

    return (
        <div className="">
            <h1>Warframe Adversary Weapon Tracker</h1>
            <h3>Sister of Parvos Weapons:</h3>
            <Navbar/>
            <Weapons weaponsList={tenet}/>
        </div>
    );
}

export default Tenet;