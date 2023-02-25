import inquirer from "inquirer";
export class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        inquirer.prompt;
    }
    getId() { }
    getEmail() { }
    getRole() {
        return "Employee";
    }
}