const Engineer = require(../lib/Employee);
const engineer = new Engineer("name", 1, "name@me.com", "github");

test("Create Engineer object", () =>{
    expect(engineer.github).toBe('github');
});

test("getGithub() to return github name", () =>{
    expect(engineer.getGithub()).toBe("github");
});

