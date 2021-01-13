import { BankAccount } from "./BankAccount";
import { Booking } from "./Booking";

export class User {
    id: number;
    userName: string;
    firstName: string;
    lastName: string;
    emailId: string;
    password: string;
    dateOfBirth: Date;
    mobileNo: number;
    balance: number;
    bookings: Array<Booking>;
    bankAccounts: Array<BankAccount>;
}