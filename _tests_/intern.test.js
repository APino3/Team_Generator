const Intern = require('../lib/intern');
const intern = new Intern("name", 1, "name@me.com", "school");

test("Create intern object", () =>{
    expect(intern.getRole()).toBe('Intern');
});

test("getSchool() to return school name", () =>{
    expect(intern.getSchool()).toBe("school");
});

