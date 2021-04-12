const Engineer = require("../lib/engineer");


describe("engineer", () => {
  describe("Initialization", () => {
    it("should create an object with 'info' array, employee 'Name',  'Id' number,  'email' address , 'GitHub' username",  () => {
      const engineer = new Engineer();

      // Verify that the new object has the correct properties
      expect(engineer).toEqual({ info: [], Name: "Name", Id: "Id", email: "email", role: "manager", github: "github"});
    });
  });


  // describe("getRole()", () => {
  //   it("should return the Email address of the employee", () => {
  //     // Create new objects to test with
  //     const engineer = new Engineer("Ian", "Id", "email", "manager","github");
  

  //     // Verify that the child was added to the children array
  //     expect(engineer.role).toEqual("engineer");
  //   });

    
  //   it("should throw an error if not provided an Employee as an argument", () => {
  //     // Define the error message that is expected to be thrown
  //     const err = new Error(
  //       "Expected parameter 'Employee' to have name, Id, Email, role, and github username"
  //     );

  //     // Define the code that will throw an error inside a callback function
  //     const callBack = () => {
  //       const employee = new Engineer();
  //       employee.getRole();
  //     };

  //     // Verify that the callback function captured the error
  //     expect(callBack).toThrowError(err);
  //   });
  // });
});
