import Progenitor from "../classes/Progenitor.tsx";

export default function ProgenitorCard (progenitor: Progenitor) {

    return (
        <div className="ListContainer_ListItem "
             // onClick={() => toggle()}
             // style={weapon.isChecked ? {opacity: "0.5"} : {}}
        >
            <div title="Mastery Rank" className="ListItem_progenitorElement" style={{backgroundImage: `url(src/assets/elements/${progenitor.elementName}.png)`}}>
                {/*<img draggable={false} src={`src/assets/elements/${progenitor.elementName}.png`}*/}
                {/*     width="32" height="32" alt={progenitor.elementName} loading="lazy"/>*/}
                {progenitor.elementName}</div>
            <div className="ListItem_itemTexture">
                <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
                    <img draggable={false} src={`src/assets/warframes/${progenitor.warframeName}.png`}
                         width="128" height="128" alt={progenitor.warframeName} loading="lazy"/>
                </div>
                <figcaption><a className="ListItem_text">{progenitor.warframeName}</a></figcaption>
            </div>
        </div>
    );
}