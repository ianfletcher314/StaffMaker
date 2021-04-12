const Manager = require("../lib/manager");


describe("manager", () => {
  describe("Initialization", () => {
    it("should create an object with 'info' array, employee 'Name',  'Id' number,  'email' address , 'office' number",  () => {
      const manager = new Manager();

      // Verify that the new object has the correct properties
      expect(manager).toEqual({ info: [], Name: "Name", Id: "Id", email: "email", role: "manager", office: "office"});
    });
  });


  describe("getRole()", () => {
    it("should return the Email address of the employee", () => {
      // Create new objects to test with
      const manager = new Manager("Ian", "Id", "email", "manager","office");
  

      // Verify that the child was added to the children array
      expect(manager.role).toEqual("manager");
    });

    
    it("should throw an error if not provided an Employee as an argument", () => {
      // Define the error message that is expected to be thrown
      const err = new Error(
        "Expected parameter 'Employee' to have name, Id, Email, role, and office number"
      );

      // Define the code that will throw an error inside a callback function
      const callBack = () => {
        const employee = new Manager();
        employee.getRole();
      };

      // Verify that the callback function captured the error
      expect(callBack).toThrowError(err);
    });
  });
});
