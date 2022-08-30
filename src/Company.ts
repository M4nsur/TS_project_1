import { faker } from '@faker-js/faker';
import { CheckMap } from './CustomMap';

export class Company implements CheckMap{
    companyName: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    }
    color: string = "blue";
    
    constructor() {
        this.companyName = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }

    markerContent(): string {
        return `Компания ${this.companyName} находится тут`
    }
}


