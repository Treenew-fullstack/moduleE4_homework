
function ElectricalDevice(name, power) {
    this.name = name;
    this.power = power;
    this.plugged = false;

}

ElectricalDevice.prototype.plugIn = function () {
    this.plugged = true;
    console.log(`${this.name} подключен`)
}

ElectricalDevice.prototype.plugOut = function () {
    this.plugged = false;
    console.log(`${this.name} не подключен`)
}




function ElectricalLamp(power, model, colour) {
    this.name = 'Lamp';
    this.model = model;
    this.collor = colour;
    this.power = power;
}


ElectricalLamp.prototype = new ElectricalDevice();

ElectricalLamp.prototype.powerUsed = function () {
        console.log(`Использование мощности ${this.power / 1000} kWt/h`)
}


const lamp1 = new ElectricalLamp(100, "TDS-150", 'Sun');

lamp1.plugIn();
console.log(lamp1);
lamp1.powerUsed();
lamp1.plugOut();


function Pc(power, processorType, turboBoostON) {
    this.name = 'PC';
    this.processorType = processorType;
    this.turboBoostON = 50;
    this.power = power;
    this.isPlugged = true;
}

Pc.prototype = new ElectricalDevice();

Pc.prototype.powerTurboUsed = function () {
    if (this.isPlugged) {
        console.log('Использование мощности с турбо режимом = ' + (this.power + this.turboBoostON));}
    else {
        console.log(`Использование мощности без турбо режима = ${this.power}`)}
}


const pc1 = new Pc(200, "AMD", true)

console.log(pc1);
pc1.powerTurboUsed()
