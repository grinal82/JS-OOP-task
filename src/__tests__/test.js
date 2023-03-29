const Character = require("../js/character");

describe("Character", () => {
    let character;

    beforeEach(() => {
        character = new Character("Bob", "Swordsman");
    });

    describe("constructor", () => {
        it("should create a new Character with the specified name and type", () => {
            expect(character.name).toEqual("Bob");
            expect(character.type).toEqual("Swordsman");
        });

        it("should set default values for health, level, attack, and defence", () => {
            expect(character.health).toEqual(100);
            expect(character.level).toEqual(1);
            expect(character.attack).toEqual(40);
            expect(character.defence).toEqual(10);
        });

        it("should throw an error if invalid name or type is provided", () => {
            expect(() => new Character("", "Swordsman")).toThrow();
            expect(() => new Character("Bob", "InvalidType")).toThrow();
        });
    });

    describe("levelUp", () => {
        it("should increase level by 1 and adjust attack, defence, and health accordingly", () => {
            character.levelUp();
            expect(character.level).toEqual(2);
            expect(character.attack).toEqual(48);
            expect(character.defence).toEqual(12);
            expect(character.health).toEqual(100);
        });

        it("should throw an error if health is 0", () => {
            character.health = 0;
            expect(() => character.levelUp()).toThrow();
        });
    });

    describe("damage", () => {
        it("should reduce health by the specified amount, adjusted by defence", () => {
            character.damage(10);
            expect(character.health).toEqual(91);
            character.damage(20);
            expect(character.health).toEqual(73);
            character.damage(100);
            expect(character.health).toEqual(0);
        });

        it("should not reduce health below 0", () => {
            character.damage(150);
            expect(character.health).toEqual(0);
        });
    });
});
