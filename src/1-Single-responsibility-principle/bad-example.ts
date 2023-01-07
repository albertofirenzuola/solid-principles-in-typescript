export class Database {

    constructor() {
        console.log('Database created');
    }

    connection() {
        console.log('Connection with database established successfully');
    }

}

export class SuperHero {

    private db: Database;

    constructor(
        public name: string
    ) {
        console.log('Super Hero created');

        this.db = new Database();
        this.db.connection();
    }

    getSuperHero() {
        console.log('Get a Super Hero from database');
    }

    createSuperHero() {
        console.log('Create a new Super Hero in database');
    }

    updateSuperHero() {
        console.log('Update a Super Hero in database');
    }

    deleteSuperHero() {
        console.log('Delete a Super Hero in database');
    }

}

const superHero = new SuperHero('Super-Man');
superHero.createSuperHero();
superHero.getSuperHero();
superHero.updateSuperHero();
superHero.deleteSuperHero();
