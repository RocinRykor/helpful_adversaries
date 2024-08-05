import Navbar from "../components/Navbar.tsx";
import Weapons from "../components/Weapons.tsx";
import {kuva} from "../static/weapons.tsx";
import {useEffect} from "react";


function Kuva() {

    useEffect(() => {
        // On mount, set the class to body
        document.body.classList.add("kuva_background");

        return () => {
            // On unmount, remove the class
            document.body.classList.remove("kuva_background");
        };
    });

    return (
        <div className="kuva_background">
            <h1>Kuva Lich Weapon Tracker</h1>
            <Navbar/>
            <Weapons weaponsList={kuva}/>
        </div>
    );
}

export default Kuva;