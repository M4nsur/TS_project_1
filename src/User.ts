import { faker } from '@faker-js/faker'

export class User {
    name: string
    location: {
        lat: number;
        lng: number;
    }

    constructor() {
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }
} 

// export class User {
//     name: string
//     location: {
//         lat: number;
//         lng: number;
//     }

//     constructor(name: string, location: {lat: number, lng: number}) {
//         this.name = name
//         this.location = location
//     }
// } 