const Manager = require('../lib/manager');
const manager = new Manager("name", 1 , "manager@manager.com", "123-123-4567");

test("Create phoneNumber for manager", () =>{
    expect(manager.getPhoneNumber()).toBe('123-123-4567');
});

test("getRole() for the manager", () =>{
    expect(manager.getRole()).toBe("Manager");
});

