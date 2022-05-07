const Employee = require('./Employee.js');

class Manager extends Employee {
  constructor(name, number, role) {
    super(name, number, 'Manager');
    this.number = number;
    this.role = role;
  }

  getOfficeNumber() {
    return this.getOfficeNumber;
  }

}
module.exports = Manager;