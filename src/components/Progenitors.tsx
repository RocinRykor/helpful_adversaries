import React from "react";

import Progenitor from "../classes/Progenitor.tsx";
import {progenitorList} from "../static/progenitors.tsx";
import ProgenitorCard from "./ProgenitorCard.tsx";
import ElementSelector from "./ElementSelector.tsx";

function Progenitors() {

    // @ts-ignore
    const [progenitors, setProgenitors] = React.useState(progenitorList);
    const [currentElement, setElement] = React.useState("All");

    const elements = [
        "All", //Not an actual element, used to display all progenitors
        "Cold",
        "Electricity",
        "Heat",
        "Impact",
        "Magnetic",
        "Radiation",
        "Toxin"
    ];

    const handleElementImageClick = (element: string) => {
        setElement(element);

        // If "All" return a complete list of the progenitors
        if (element === "All") {
            setProgenitors(progenitorList);
            return;
        }

        // else set progenitors to contain only those matching the selected element
        const updatedProgenitors = progenitorList.filter(progenitor => progenitor.elementName === element);

        setProgenitors(updatedProgenitors); // Update state with new array
    };


    function sortByName(weaponList: Array<Progenitor>) {
        weaponList.sort((a, b) => {
            if (a.warframeName < b.warframeName) {
                return -1;
            } else {
                return 1;
            }
        });
    }

    sortByName(progenitors);

    return (
        <div>
            <div className={"element_bar"}>
                {
                    elements.map((element, index) => (
                        <ElementSelector
                            key={index}
                            element={element}
                            currentElement={currentElement}
                            onElementImageClick={handleElementImageClick}
                        />
                    ))
                }
            </div>
            <div className="ListContainer">
                {
                    progenitors.map((progenitor: Progenitor) =>
                        ProgenitorCard(progenitor)
                    )
                }
            </div>
        </div>
    );
}

export default Progenitors;