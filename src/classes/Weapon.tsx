class Weapon {
    public isChecked: boolean;
    public weaponName: string;
    public isTracked: boolean;

    constructor(name: string) {
        this.isChecked = false;
        this.weaponName = name;
        this.isTracked = false;
    }

    toggleAvailability() {
        this.isChecked = !this.isChecked;
    }

    toggleTracked() {
        console.log("toggleTracked");
        this.isTracked = !this.isTracked;
    }
}

export default Weapon;