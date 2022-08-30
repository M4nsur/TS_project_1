import { faker } from "@faker-js/faker"
import { CheckMap } from './CustomMap';


export class User implements CheckMap{
    name: string
    location: {
        lat: number;
        lng: number;
    }

    color: string = "black"

    constructor() {
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }

    markerContent(): string {
        return `пользователь ${this.name} находится тут`
    }
} 

