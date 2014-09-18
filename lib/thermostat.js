function Thermostat() {
	this.temperature = 20;
	this.powerSavingMode = true; 
}

Thermostat.prototype.increase = function() {
	if(this.temperature<this.maximum())this.temperature+=1;
};

Thermostat.prototype.decrease = function() {
	if(this.temperature>10)this.temperature-=1;
};

Thermostat.prototype.maximum = function() {
	if(this.powerSavingMode)return 25;
	return 32;
};