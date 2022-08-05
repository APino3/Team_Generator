const Intern = require(../lib/Employee);
const intern = new Intern("name", 1, "name@me.com", "github");

test("Create intern object", () =>{
    expect(intern.school).toBe('school');
});

test("getSchool() to return school name", () =>{
    expect(intern.getSchool()).toBe("school");
});

