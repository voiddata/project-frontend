import { Flight } from "./Flight";

export class Schedule {
    id: number;
    fromAirport: string;
    toAirport: string;
    departure: Date;
    arrival: Date;
    economySeats: number;
    bussinessSeats: number;
    flightStatus: string;
    bSeatPrice: number;
    eSeatPrice: number;
    flight: Flight = new Flight();
}