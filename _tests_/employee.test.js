const Employee = require("../lib/employee");
// const Manager = require("../lib/manager");
// const Engineer = require("../lib/engineer");
// const Intern = require("../lib/intern");

describe("employee", () => {
  describe("Initialization", () => {
    it("should create an employee", () => {
      const employee = new Employee();

      // Verify that the new object has the correct properties
      expect(typeof(employee)).toEqual('object');
    });
    it("should return the name of the employee", () => {
      // Create new objects to test with
      const name = "Ian"
      const employee = new Employee(name);
  
      // Verify that the child was added to the children array
      expect(employee.name).toEqual("Ian");
    });
    it("should return the id of the employee", () => {
      // Create new objects to test with
      const id = "id"
      const employee = new Employee(id);
  

      // Verify that the child was added to the children array
      expect(employee.id).toEqual("id");
    });

  });

  describe("getName()", () => {
    

    

    it("should throw an error if not provided an Employee as an argument", () => {
      // Define the error message that is expected to be thrown
      const err = new Error(
        "Expected parameter 'Employee' to have name, Id, Email, and role"
      );

      // Define the code that will throw an error inside a callback function
      const callBack = () => {
        const employee = new Employee();
        employee.getName();
      };

      // Verify that the callback function captured the error
      expect(callBack).toThrowError(err);
    });
  });
  describe("getId()", () => {
    it("should return the Id of the employee", () => {
      // Create new objects to test with
      const employee = new Employee("Ian", "Id", "email", "employee");
  

      // Verify that the child was added to the children array
      expect(employee.Id).toEqual("Id");
    });

    

    it("should throw an error if not provided an Employee as an argument", () => {
      // Define the error message that is expected to be thrown
      const err = new Error(
        "Expected parameter 'Employee' to have name, Id, Email, and role"
      );

      // Define the code that will throw an error inside a callback function
      const callBack = () => {
        const employee = new Employee();
        employee.getId();
      };

      // Verify that the callback function captured the error
      expect(callBack).toThrowError(err);
    });
  });

  describe("getEmail()", () => {
    it("should return the Email address of the employee", () => {
      // Create new objects to test with
      const employee = new Employee("Ian", "Id", "email", "employee");
  

      // Verify that the child was added to the children array
      expect(employee.email).toEqual("email");
    });

    

    it("should throw an error if not provided an Employee as an argument", () => {
      // Define the error message that is expected to be thrown
      const err = new Error(
        "Expected parameter 'Employee' to have name, Id, Email, and role"
      );

      // Define the code that will throw an error inside a callback function
      const callBack = () => {
        const employee = new Employee();
        employee.getEmail();
      };

      // Verify that the callback function captured the error
      expect(callBack).toThrowError(err);
    });
  });


  describe("getRole()", () => {
    it("should return the Email address of the employee", () => {
      // Create new objects to test with
      const employee = new Employee("Ian", "Id", "email", "employee");
  

      // Verify that the child was added to the children array
      expect(employee.role).toEqual("employee");
    });

    

    it("should throw an error if not provided an Employee as an argument", () => {
      // Define the error message that is expected to be thrown
      const err = new Error(
        "Expected parameter 'Employee' to have name, Id, Email, and role"
      );

      // Define the code that will throw an error inside a callback function
      const callBack = () => {
        const employee = new Employee();
        employee.getRole();
      };

      // Verify that the callback function captured the error
      expect(callBack).toThrowError(err);
    });
  });
});
