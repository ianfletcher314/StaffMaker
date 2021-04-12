const Manager = require("../lib/manager");


describe("manager", () => {
  describe("Initialization", () => {
    it("should create a manager object",  () => {
      const manager = new Manager();

      // Verify that the new object has the correct properties
      expect(typeof(manager)).toEqual("object");
    });
  });


  describe("getRole()", () => {
    it("should be a method to get the Role of an employee", () => {
      // Create new objects to test with
      const manager = new Manager();
  

      // Verify that the child was added to the children array
      expect(manager.getRole()).toEqual("Manager");
    });

  });

  describe("getOffice()", () => {
    it("should be a method to get the Role of an employee", () => {
      // Create new objects to test with
      const manager = new Manager("a","b","c",45);
  

      // Verify that the child was added to the children array
      expect(manager.getOffice()).toEqual(45);
    });

  });
});
