import { Passenger } from "../appmodel/Passenger";
import { Schedule } from "../appmodel/Schedule";

export class ReturnTicket {
    firstTrip: Schedule;
    secondTrip: Schedule;
    passengerList1: Array<Passenger>;
    passengerList2: Array<Passenger>;
    price: number;
    userId: number;
}