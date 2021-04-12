const Intern = require("../lib/intern");


describe("intern", () => {
  describe("Initialization", () => {
    it("should create an object with 'info' array, employee 'Name',  'Id' number,  'email' address , 'School' of affiliation",  () => {
      const intern = new Intern();

      // Verify that the new object has the correct properties
      expect(intern).toEqual({ info: [], Name: "Name", Id: "Id", email: "email", role: "manager", school: "school"});
    });
  });


  describe("getRole()", () => {
    it("should return the Email address of the employee", () => {
      // Create new objects to test with
      const intern = new Intern("Ian", "Id", "email", "manager","school");
  

      // Verify that the child was added to the children array
      expect(intern.role).toEqual("Intern");
    });

    
    it("should throw an error if not provided an Employee as an argument", () => {
      // Define the error message that is expected to be thrown
      const err = new Error(
        "Expected parameter 'Employee' to have name, Id, Email, role, and school of affiliation"
      );

      // Define the code that will throw an error inside a callback function
      const callBack = () => {
        const employee = new Intern();
        employee.getRole();
      };

      // Verify that the callback function captured the error
      expect(callBack).toThrowError(err);
    });
  });
});
