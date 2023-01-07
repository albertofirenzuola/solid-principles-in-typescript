export abstract class SuperHero {

    protected constructor(
        public name: string
    ) {
        console.log(`SuperHero created: ${name}`);
    }

    abstract getSuperPower(): void;
}

export class SpiderMan extends SuperHero {

    constructor() {
        super('Spider-Man');
    }

    getSuperPower() {
        console.log(`${this.name} superpowers: Enhanced agility and strength`);
    }
}

export class IronMan extends SuperHero {

    constructor() {
        super('Iron Man');
    }

    getSuperPower() {
        console.log(`${this.name} superpowers: Flight, artificial intelligence, armor, and energy blasts`);
    }

}

export class Thor extends SuperHero {

        constructor() {
            super('Thor');
        }

        getSuperPower() {
            console.log(`${this.name} superpowers: Summoning thunder and lightning, summoning Mjolnir, strength, stamina, speed, durability, and fast reflexes`);
        }

}

export class CaptainAmerica extends SuperHero {

        constructor() {
            super('Captain America');
        }

        getSuperPower() {
            console.log(`${this.name} superpowers: Enhanced speed, stamina, agility, and strength`);
        }

}

export class Superpower {

    constructor(
        private superHero: SuperHero[]
    ) {
        console.log('Superpower created');
    }

    getSuperPowers() {
        this.superHero.forEach(superHero => {
            superHero.getSuperPower();
        });
    }

}

const spiderMan = new SpiderMan();
const ironMan = new IronMan();
const thor = new Thor();
const captainAmerica = new CaptainAmerica();
const superHeroes = [spiderMan, ironMan, thor, captainAmerica];

const superpower = new Superpower(superHeroes);
superpower.getSuperPowers();
