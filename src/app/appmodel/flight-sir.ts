export class Flight {
    flightNo: number;
    name: string;
    source: string;
    destination: string;

    constructor(flightNo: number, name: string, source: string, destination: string) {
        this.flightNo = flightNo;
        this.name = name;
        this.source = source;
        this.destination = destination;
    }
}