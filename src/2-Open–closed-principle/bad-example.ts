export class SuperHero {

    constructor(
        public name: string
    ) {
        console.log(`SuperHero created: ${name}`);
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
            const name = superHero.name;

            if (name === 'Spider-Man') {
                console.log(`${name} superpowers: Enhanced agility and strength`);
            }

            if (name === 'Iron Man') {
                console.log(`${name} superpowers: Flight, artificial intelligence, armor, and energy blasts`);
            }

            if (name === 'Thor') {
                console.log(`${name} superpowers: Summoning thunder and lightning, summoning Mjolnir, strength, stamina, speed, durability, and fast reflexes`);
            }

            if (name === 'Captain America') {
                console.log(`${name} superpowers: Enhanced speed, stamina, agility, and strength`);
            }
        });
    }

}

const spiderMan = new SuperHero('Spider-Man');
const ironMan = new SuperHero('Iron Man');
const thor = new SuperHero('Thor');
const captainAmerica = new SuperHero('Captain America');
const superHeroes = [spiderMan, ironMan, thor, captainAmerica];

const superpower = new Superpower(superHeroes);
superpower.getSuperPowers();
