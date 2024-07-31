import "./App.css";
import React from "react";

function App() {
    const [items, setItems] = React.useState([
        {text: "Kuva Drakgoon", isChecked: false},
        {text: "Kuva Hek", isChecked: false},
        {text: "Kuva Hind", isChecked: false},
        {text: "Kuva Karak", isChecked: false},
        {text: "Kuva Kohm", isChecked: false},
        {text: "Kuva Ogris", isChecked: false},
        {text: "Kuva Quartakk", isChecked: false},
        {text: "Kuva Sobek", isChecked: false},
        {text: "Kuva Tonkor", isChecked: false},
        {text: "Kuva Zarr", isChecked: false},
        {text: "Kuva Brakk", isChecked: false},
        {text: "Kuva Kraken", isChecked: false},
        {text: "Kuva Nukor", isChecked: false},
        {text: "Kuva Seer", isChecked: false},
        {text: "Kuva Twin Stubbas", isChecked: false},
        {text: "Kuva Grattler", isChecked: false},
        {text: "Kuva Bramma", isChecked: false},
        {text: "Kuva Chakkhurr", isChecked: false},
        {text: "Kuva Shildeg", isChecked: false},
        {text: "Kuva Ayanga", isChecked: false},
    ]);

    const handleCheck = (itemToCheck: string) => {
        // Create a new array from the current state so as not to directly mutate it
        let newItems = [...items];

        // Find the item and toggle the isChecked property
        const itemIndex = newItems.findIndex(item => item.text === itemToCheck);
        newItems[itemIndex].isChecked = !newItems[itemIndex].isChecked;

        setItems(newItems);
    };

    const handleReset = () => {
        // Create a new array from the current state so as not to directly mutate it
        const newItems = items.map((item) => {
            return {...item, isChecked: false};
        });

        setItems(newItems);
    };

    return (
        <div className="">
            <h1>Warframe Adversary Weapon Tracker</h1>
            <button onClick={handleReset}>Reset</button>
            <div>
                <div className="ListContainer">
                    {
                        items.map((item) =>
                            <div className="ListContainer_ListItem "
                                 onClick={() => handleCheck(item.text)}
                                 style={item.isChecked ? {opacity: "0.5"} : {}}>
                                {/*<div title="Mastery Rank" className="ListItem_masteryRank">0</div>*/}
                                <div className="ListItem_itemTexture">
                                    <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
                                        <img src={`src/assets/weapons/${item.text}.png`}
                                             width="128" height="128" alt={item.text} loading="lazy"/>
                                    </div>
                                    <figcaption><a className="ListItem_text">{item.text}</a></figcaption>
                                </div>
                            </div>)
                    }
                </div>
            </div>
        </div>
    );
}

export default App;
