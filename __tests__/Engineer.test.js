const Engineer = require("../lib/Engineer");
const Employee = require("../lib/Employee");

test("Can set GitHub via constructor argument", () => {
    const testValue = "GitHub User";
    const e = new Engineer("Foo", 1, "test@test.com", testValue);
    expect(e.gitHub).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const e = new Engineer("Foo", 1, "test@test.com", "GitHub User");
    expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub via getGitHub()", () => {
    const testValue = "GitHub User";
    const e = new Engineer("Foo", 1, "test@test.com", testValue);
    expect(e.getGitHub()).toBe(testValue);
});