import React from "react";

import Progenitor from "../classes/Progenitor.tsx";
import {progenitorList} from "../static/progenitors.tsx";
import ProgenitorCard from "./ProgenitorCard.tsx";

function Progenitors() {

    // @ts-ignore
    const [progenitors, setProgenitors] = React.useState(progenitorList);

    // function handleCheck(updater: CallableFunction, itemList: Array<Weapon>, itemToCheck: Weapon) {
    //     // Create a new array from the current state so as not to directly mutate it
    //     let newItems = [...itemList];
    //
    //     // Find the item and toggle the isChecked property
    //     const itemIndex = newItems.findIndex(item => item.weaponName === itemToCheck.weaponName);
    //     newItems[itemIndex].toggleAvailability();
    //
    //     updater(newItems);
    // };

    // function handleReset(weaponList: Array<Weapon>, stateFunc: CallableFunction) {
    //     /*
    //      * weaponList: An array of Weapons.
    //      * stateFunc: The React function used to update the state of the weaponList.
    //      */
    //     // Create a new array from the current state so as not to directly mutate it
    //     var newItems = [...weaponList];
    //     newItems.forEach((weapon) => {
    //         weapon.isChecked = false;
    //     });
    //     stateFunc(newItems);
    // };

    // function resetWeapons() {
    //     handleReset(weapons, setWeapons);
    // }

    function sortByName(weaponList: Array<Progenitor>) {
        weaponList.sort( (a, b) => {
            if (a.warframeName < b.warframeName) {
                return -1;
            }
            else {
                return 1;
            }
        });
    }

    sortByName(progenitors);

    return (
        <div className="ListContainer">
            {
                progenitors.map((progenitor: Progenitor) =>
                    ProgenitorCard(progenitor)
                )
            }
        </div>
    );
}

export default Progenitors;