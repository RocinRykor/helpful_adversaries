import {NavLink} from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar">
            <NavLink className={"nav_item"} to={"/"}>Kuva</NavLink>
            <NavLink className={"nav_item"} to={"/tenet"}>Tenet</NavLink>
            <NavLink className={"nav_item"} to={"/progenitors"}>Progenitors</NavLink>
        </div>
    );
}

export default Navbar;