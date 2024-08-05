import Navbar from "../components/Navbar.tsx";
import Weapons from "../components/Weapons.tsx";
import {tenet} from "../static/weapons.tsx";
import {useEffect} from "react";


function Tenet() {

    useEffect(() => {
        // On mount, set the class to body
        document.body.classList.add("tenet_background");

        return () => {
            // On unmount, remove the class
            document.body.classList.remove("tenet_background");
        };
    });

    return (
        <div className="tenet_background">
            <h1>Sister of Parvos Weapon Tracker</h1>
            <Navbar/>
            <Weapons weaponsList={tenet}/>
        </div>
    );
}

export default Tenet;