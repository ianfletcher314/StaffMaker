const Engineer = require("../lib/engineer");


describe("engineer", () => {
  describe("Initialization", () => {
    it("should create an Engineer object",  () => {
      const engineer = new Engineer();

      // Verify that the new object has the correct properties
      expect(typeof(engineer)).toEqual("object");
    });
  });


  describe("getRole()", () => {
    it("should be a method that returns the Role of the employee", () => {
      // Create new objects to test with
      const engineer = new Engineer();
  

      // Verify that the child was added to the children array
      expect(engineer.getRole()).toEqual("Engineer");
    });

  });
  describe("getGit()", () => {
    it("should be a method that returns the Role of the employee", () => {
      // Create new objects to test with
      const engineer = new Engineer("a","b","c","github");
      console.log(engineer)
  

      // Verify that the child was added to the children array
      expect(engineer.getGit()).toEqual("github");
    });

  });
});
