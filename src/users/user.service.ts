import {Injectable} from '@angular/core';
import { User } from './user';

@Injectable()
export class UserService {

    getUsers():User[] {
        let christian: User = {
            id: 1,
            avatar: "",
            email: "	christian.scheil@pentasys.de",
            name: "Christian",
            phone: "",
            address: {
                street: "Rothenburger Straße",
                streetnumber: "116",
                city: "Nürnberg",
                zipcode: "90439",
            }
        };
        let dennis: User = {
            id: 2,
            avatar: "",
            email: "dennis.petrick@pentasys.de",
            name: "Dennis",
            phone: "",
            address: {
                street: "Solmsstr.",
                streetnumber: "41",
                city: "Frankfurt",
                zipcode: "60486",
            }
        };
        let homeless: User = {
			id: 4,
			avatar: "",
			email: "",
			name: "Nobody",
			phone: "",
			address: undefined
		};

        return [christian, dennis, homeless];
    }
}