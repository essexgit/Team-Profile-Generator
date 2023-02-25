import { Employee } from "./Employee.js";
export default class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getSchool() { }
    getRole() {
        return "Intern";
    }
}