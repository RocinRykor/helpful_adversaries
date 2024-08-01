import React from "react";

import Weapon from "../classes/Weapon";
import WeaponCard from "./WeaponCard.tsx";

interface WeaponsProps {
    weaponsList: Array<Weapon>
}

const Weapons: React.FC<WeaponsProps> = ({weaponsList}) => {

    const [weapons, setWeapons] = React.useState(weaponsList);

    function handleCheck(updater: CallableFunction, itemList: Array<Weapon>, itemToCheck: Weapon) {
        // Create a new array from the current state so as not to directly mutate it
        let newItems = [...itemList];

        // Find the item and toggle the isChecked property
        const itemIndex = newItems.findIndex(item => item.weaponName === itemToCheck.weaponName);
        newItems[itemIndex].toggleAvailability();

        updater(newItems);
    };

    function handleReset(weaponList: Array<Weapon>, stateFunc: CallableFunction) {
        /*
         * weaponList: An array of Weapons.
         * stateFunc: The React function used to update the state of the weaponList.
         */
        // Create a new array from the current state so as not to directly mutate it
        var newItems = [...weaponList];
        newItems.forEach((weapon) => {
            weapon.isChecked = false;
        });
        stateFunc(newItems);
    };

    function resetWeapons() {
        handleReset(weapons, setWeapons);
    }

    function sortByName(weaponList: Array<Weapon>) {
        weaponList.sort( (a, b) => {
            if (a.weaponName < b.weaponName) {
                return -1;
            }
            else {
                return 1;
            }
        });
    }

    sortByName(weapons);

    return (
        <div className="ListContainer">
            <button onClick={resetWeapons}>Reset</button>
        {
            weapons.map((weapon: Weapon) =>
                WeaponCard(weapon, weapons, setWeapons, handleCheck)
            )
        }
        </div>
);
}

export default Weapons;