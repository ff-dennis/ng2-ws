import { Address } from './address'

export class User {
    id: number;
    name: string;
    avatar: string;
    phone: string;
    email: string; 
    address = new Address();
}