const Engineer = require('./Employee.js');

class Manager extends Employee {
  constructor(name, gitHub, role) {
    super(name, gitHub, 'Engineer');
    this.gitHub = gitHub;
    this.role = role;
  }

  getgitHub() {
    return this.getgitHub;
  }

}
module.exports = Engineer;