import { Admin } from "../appmodel/Admin";
import { Flight } from "../appmodel/Flight";
import { Schedule } from "../appmodel/Schedule";
import { User } from "../appmodel/User";

export class ScheduleFetch {
    flight: Flight;
    schedule: Schedule;
    user: User;
    admin: Admin;
}