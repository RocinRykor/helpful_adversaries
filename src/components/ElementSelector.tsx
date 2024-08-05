import React from "react";

interface ElementSelector {
    element: string;
    onElementImageClick: (element: string) => void;
    currentElement: string;
}

const ElementSelector: React.FC<ElementSelector> = ({element, onElementImageClick, currentElement}) => {
    return (
        <div
            className={`element-button ${currentElement == element ? "element-button--selected" : ""}`}
            onClick={() => onElementImageClick(element)}
        >
            {element === "All" ?
                <div>
                    <img src={`src/assets/elements/${element}.png`} alt={element} width="24px"/>
                    {/*<span>All</span>*/}
                </div>
                :
                <img src={`src/assets/elements/${element}.png`} alt={element} width="32px"/>
            }
        </div>
    );
};

export default ElementSelector;