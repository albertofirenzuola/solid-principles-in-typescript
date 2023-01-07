export class Database {

    constructor() {
        console.log('Database created');
    }

    connection() {
        console.log('Connection with database established successfully');
    }

}

export class SuperHero {

    constructor(
        public name: string
    ) {
        console.log(`SuperHero created: ${name}`);
    }

}

export class SuperHeroRepository {

    private db: Database;

    constructor() {
        console.log('SuperHeroRepository created');

        this.db = new Database();
        this.db.connection();
    }

    getSuperHero(id: number) {
        console.log('Get a Super Hero from database');
    }

    createSuperHero(superHero: SuperHero) {
        console.log('Create a new Super Hero in database');
    }

    updateSuperHero(superHero: SuperHero) {
        console.log('Update a Super Hero in database');
    }

    deleteSuperHero(id: number) {
        console.log('Delete a Super Hero in database');
    }

}

const superHero = new SuperHero('Super-Man');
const superHeroRepository = new SuperHeroRepository();
superHeroRepository.createSuperHero(superHero);
superHeroRepository.getSuperHero(1);
superHeroRepository.updateSuperHero(superHero);
superHeroRepository.deleteSuperHero(1);
