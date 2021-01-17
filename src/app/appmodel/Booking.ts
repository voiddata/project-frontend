import { Flight } from "./Flight";
import { Log } from "./Log";
import { Passenger } from "./Passenger";
import { User } from "./User";

export class Booking {
    
    pnr: number;
	dateOfBooking: Date;
	passengers: number;
	pnrReturn: number;
	
	price: number;
	fromAirport: string;
    toAirport: string;
	departure: Date;
    
    arrival: Date;
	flight: Flight;
	user: User;
	
    log: Log;
	
    passenger: Passenger;
    
}