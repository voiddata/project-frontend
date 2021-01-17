import { Passenger } from "../appmodel/Passenger";
import { Schedule } from "../appmodel/Schedule";

export class BookTicket {
    schedule: Schedule;
    passengerList: Array<Passenger>;
    price: number;
    userId: number;
}