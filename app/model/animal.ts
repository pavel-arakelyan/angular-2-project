export class Animal {
    name: string;
    static DEFAULT_NAME = "Jango";
    constructor(private theName: string) { this.name = theName; }

/*

    get name():string {
        return this._name;
    }

    set name(value:string) {
        this._name = value;
    }
*/

    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }

}
