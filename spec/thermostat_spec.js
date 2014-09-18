describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe("initialization of thermostat", function() {
   
    it("should have an initialization temperature of 20 degrees", function() {
      expect(thermostat.temperature).toEqual(20);
    }); 

    it("should have a power saving mode on initialization", function() {
      expect(thermostat.powerSavingMode).toBe(true);
    });
  });
});
