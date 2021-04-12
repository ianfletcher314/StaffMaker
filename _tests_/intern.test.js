const Intern = require("../lib/intern");


describe("intern", () => {
  describe("Initialization", () => {
    it("should create a new Intern Object",  () => {
      const intern = new Intern();

      // Verify that the new object has the correct properties
      expect(typeof(intern)).toEqual("object");
    });
  });


  describe("getRole()", () => {
    it("should be a method to get the role of an employee", () => {
      // Create new objects to test with
      const intern = new Intern();
  

      // Verify that the child was added to the children array
      expect(intern.getRole()).toEqual("Intern");
    });

    
 
  });
  describe("getSchool()", () => {
    it("should be a method to get the role of an employee", () => {
      // Create new objects to test with
      const intern = new Intern("a","b","c","school");
  

      // Verify that the child was added to the children array
      expect(intern.getSchool()).toEqual("school");
    });

    
 
  });
});
