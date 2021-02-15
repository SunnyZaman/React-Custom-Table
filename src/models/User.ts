export class IUser {
    Id: number = 0;
    FirstName: string = "";
    LastName: string = "";
    Email: string = "";
    DateOfBirth: string = "";
    Age: number = 0;
    Country: string = "";
    Phone: string = "";
    constructor(options?: Partial<IUser>) {
        Object.assign(this, options);
    }
}