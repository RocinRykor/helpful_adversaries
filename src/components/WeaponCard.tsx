import Weapon from "../classes/Weapon";

export default function WeaponCard (weapon: Weapon, weaponList: Array<Weapon>, stateFunc: CallableFunction, callback: CallableFunction) {

    function toggle() {
        callback(stateFunc, weaponList, weapon);
    }
    return (
        <div className="ListContainer_ListItem "
             onClick={() => toggle()}
             style={weapon.isChecked ? {opacity: "0.5"} : {}}>
            {/*<div title="Mastery Rank" className="ListItem_masteryRank">0</div>*/}
            <div className="ListItem_itemTexture">
                <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
                    <img draggable={false} src={`src/assets/weapons/${weapon.weaponName}.png`}
                         width="128" height="128" alt={weapon.weaponName} loading="lazy"/>
                </div>
                <figcaption><a className="ListItem_text">{weapon.weaponName}</a></figcaption>
            </div>
        </div>
    );
}