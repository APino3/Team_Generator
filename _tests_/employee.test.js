const Employee = require('../lib/employee.js');

const employee = new Employee("Name", 1, "name@me.com");

test("Create Employee Object", () => {
    expect(employee.name).toBe("Name");
    expect(employee.id).toBe(1);
    expect(employee.email).toBe("name@me.com");
});

test("getName() returns a name", () => {
    expect(employee.getName()).toBe("Name");
});

test("getId() returns an id", () => {
    expect(employee.getId()).toBe(1);
});

test("getEmail() returns an email", () => {
    expect(employee.getEmail()).toBe("name@me.com");
});

test("getRole() returns an Employee", () => {
    expect(employee.getRole()).toBe("Employee");
});

