import Weapon from "../classes/Weapon";
export default function WeaponCard (weapon: Weapon, weaponList: Array<Weapon>, stateFunc: CallableFunction, toggleFunc: CallableFunction, trackingFunc: CallableFunction) {

    function toggle() {
        toggleFunc(stateFunc, weaponList, weapon);
    }

    function track() {
        trackingFunc(stateFunc, weaponList, weapon);
    }

    function handleMouseAction(e: React.MouseEvent){
        if(e.button === 2) {
            e.preventDefault();    // prevent the context menu from appearing on right click
            track(); // if right mouse event
        } else if(e.button === 0) {
            toggle(); // if left mouse event
        }
    }

    return (
        <div className="ListContainer_ListItem"
             onMouseDown={handleMouseAction}
             style={weapon.isChecked ? {opacity: "0.5"} : {}}>
            <div className={weapon.isTracked ? "ListItem_itemTexture tracked" : "ListItem_itemTexture"}>
                <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
                    <img draggable={false} src={`/assets/weapons/${weapon.weaponName}.png`}
                         width="128" height="128" alt={weapon.weaponName} loading="lazy"/>
                </div>
                <figcaption><a className="ListItem_text">{weapon.weaponName}</a></figcaption>
            </div>
        </div>
    );
}