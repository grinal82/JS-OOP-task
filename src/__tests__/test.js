import Character from "../js/character";
import Bowerman from "../js/bowman";
import Magician from "../js/magician";
import Swordsman from "../js/swordsman";
import Daemon from "../js/daemon";
import Undead from "../js/undead";
import Zombie from "../js/zombie";

describe("Character", () => {
    test("should throw an error when the name is less than 2 characters", () => {
        expect(() => new Character("A", "Bowman")).toThrow(
            "Имя должно содержать от 2 до 10 символов"
        );
    });

    test("should throw an error when the name is more than 10 characters", () => {
        expect(() => new Character("A".repeat(11), "Bowman")).toThrow(
            "Имя должно содержать от 2 до 10 символов"
        );
    });

    test("should throw an error when the type is invalid", () => {
        expect(() => new Character("Alice", "Invalid")).toThrow(
            "Некорректный тип персонажа"
        );
    });

    test("should create a character with valid name and type", () => {
        const character = new Character("Alice", "Bowman");
        expect(character.name).toBe("Alice");
        expect(character.type).toBe("Bowman");
        expect(character.health).toBe(100);
        expect(character.level).toBe(1);
    });
});

describe("Bowerman", () => {
    test("should create a Bowerman with default type", () => {
        const bowerman = new Bowerman("Bob");
        expect(bowerman.name).toBe("Bob");
        expect(bowerman.type).toBe("Bowman");
        expect(bowerman.health).toBe(100);
        expect(bowerman.level).toBe(1);
        expect(bowerman.attack).toBe(25);
        expect(bowerman.defence).toBe(25);
    });
});

describe("Daemon", () => {
    test("should create a Daemon with default type", () => {
        const daemon = new Daemon("Dave");
        expect(daemon.name).toBe("Dave");
        expect(daemon.type).toBe("Daemon");
        expect(daemon.health).toBe(100);
        expect(daemon.level).toBe(1);
        expect(daemon.attack).toBe(10);
        expect(daemon.defence).toBe(40);
    });
});

describe("Magician", () => {
    test("should create a Magician with default type", () => {
        const magician = new Magician("Maggie");
        expect(magician.name).toBe("Maggie");
        expect(magician.type).toBe("Magician");
        expect(magician.health).toBe(100);
        expect(magician.level).toBe(1);
        expect(magician.attack).toBe(10);
        expect(magician.defence).toBe(40);
    });
});

describe("Swordsman", () => {
    test("should create a Swordsman with default type", () => {
        const swordsman = new Swordsman("Steve");
        expect(swordsman.name).toBe("Steve");
        expect(swordsman.type).toBe("Swordsman");
        expect(swordsman.health).toBe(100);
        expect(swordsman.level).toBe(1);
        expect(swordsman.attack).toBe(40);
        expect(swordsman.defence).toBe(10);
    });
});

describe("Undead", () => {
    test("should create an Undead with default type", () => {
        const undead = new Undead("John");
        expect(undead.name).toBe("John");
        expect(undead.type).toBe("Undead");
        expect(undead.health).toBe(100);
        expect(undead.level).toBe(1);
        expect(undead.attack).toBe(25);
        expect(undead.defence).toBe(25);
    });
});

describe("Zombie", () => {
    test("should create a Zombie with default type", () => {
        const zombie = new Zombie("Bruce");
        expect(zombie.name).toBe("Bruce");
        expect(zombie.type).toBe("Zombie");
        expect(zombie.health).toBe(100);
        expect(zombie.level).toBe(1);
        expect(zombie.attack).toBe(40);
        expect(zombie.defence).toBe(10);
    });
});

describe("levelUp", () => {
    it("should increase the level by 1 and reset health to 100", () => {
        const character = new Swordsman("John", "Swordsman");
        character.levelUp();
        expect(character.level).toEqual(2);
        expect(character.health).toEqual(100);
    });

    it("should throw an error when the health is 0", () => {
        const character = new Character("John", "Swordsman");
        character.health = 0;
        expect(() => character.levelUp()).toThrowError(
            "Нельзя повысить левел умершего"
        );
    });
});

describe("damage", () => {
    it("should reduce health by the correct amount", () => {
        const character = new Swordsman("John");
        character.damage(10);
        expect(character.health).toEqual(91);
    });

    it("should set health to 0 when the damage is greater than the current health", () => {
        const character = new Swordsman("John");
        character.damage(120);
        expect(character.health).toEqual(0);
    });

    it("should not reduce health when the health is already 0", () => {
        const character = new Swordsman("John");
        character.health = 0;
        expect(() => character.damage(10)).toThrowError(
            "Нельзя нанести урон мертвому персонажу"
        );
        expect(character.health).toEqual(0);
    });
});
