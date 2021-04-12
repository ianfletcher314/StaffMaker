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
      const name = "Ian"
      const employee = new Employee(name,id);
  

      // Verify that the child was added to the children array
      expect(employee.id).toEqual("id");
    });
    it("should return the email of the employee", () => {
      // Create new objects to test with
      const id = "id"
      const name = "Ian"
      const email = "email"
      const employee = new Employee(name,id,email);
  

      // Verify that the child was added to the children array
      expect(employee.email).toEqual("email");
    });
    

  });

  describe("getName()", () => {
    it("should be a method to get the name of an employee", () => {
      // Create new objects to test with
      const name = "Ian"
      const employee = new Employee(name);
  

      // Verify that the child was added to the children array
      expect(employee.getname()).toEqual("Ian");
    });
  });
  describe("getId()", () => {
    it("should be a method to get the ID of an employee", () => {
      // Create new objects to test with
      const name = "Ian"
      const id = "id"
      const employee = new Employee(name,id);
  

      // Verify that the child was added to the children array
      expect(employee.getId()).toEqual("id");
    });
  });

  describe("getEmail()", () => {
    it("should be a method to get the ID of an employee", () => {
      // Create new objects to test with
      const name = "Ian"
      const id = "id"
      const email = "email"
      const employee = new Employee(name,id,email);
  

      // Verify that the child was added to the children array
      expect(employee.getEmail()).toEqual("email");
    });
  });


  describe("getRole()", () => {
    it("should be a method to get the Role of an employee", () => {
      // Create new objects to test with
      const name = "Ian"
      const id = "id"
      const email = "email"
      const employee = new Employee(name,id,email);
  

      // Verify that the child was added to the children array
      expect(employee.getRole()).toEqual("Employee");
    });
  });
});
