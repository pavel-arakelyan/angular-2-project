"use strict";
var Animal = (function () {
    function Animal(theName) {
        this.theName = theName;
        this.name = theName;
    }
    /*
    
        get name():string {
            return this._name;
        }
    
        set name(value:string) {
            this._name = value;
        }
    */
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    Animal.DEFAULT_NAME = "Jango";
    return Animal;
}());
exports.Animal = Animal;
//# sourceMappingURL=animal.js.map