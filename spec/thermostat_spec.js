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

    describe("temperature control", function() {

      it("should allow you to increase temperature", function() {
        thermostat.temperature = 20;
        thermostat.increase();
        expect(thermostat.temperature).toEqual(21);
      });

      it("should allow you to decrease temperature", function() {
        thermostat.temperature = 20;
        thermostat.decrease();
        expect(thermostat.temperature).toEqual(19);
      });

      describe("general functionality", function() {

        it("should not allow the temperature to go below 10", function(){
          thermostat.temperature = 10;
          thermostat.decrease();
          expect(thermostat.temperature).toEqual(10)
        });

        it("should not allow the temperature to go above 25 in Power Saving Mode", function(){
          this.powerSavingMode= true;
          thermostat.temperature = 25;
          thermostat.increase();
          expect(thermostat.temperature).toEqual(25);
        });

        it("should not allow the temperature to go above 32 when Power Saving Mode is off", function(){
          // this.powerSavingMode = false;
          thermostat.temperature = 32;
          thermostat.increase();
          expect(thermostat.temperature).toEqual(32);
        });
      });
    });
  });
});
