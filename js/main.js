// battery Objects
const battery =
    [{
        "batteryName": "WKL-78",
        "capacityAh": 2.3,
        "voltage": 14.4,
        "maxDraw": 3.2,
        "endVoltage": 10,
    },
    {
        "batteryName": "WKL-140",
        "capacityAh": 4.5,
        "voltage": 14.4,
        "maxDraw": 9.2,
        "endVoltage": 5,
    },
    {
        "batteryName": "Wmacro-78",
        "capacityAh": 2.5,
        "voltage": 14.5,
        "maxDraw": 10,
        "endVoltage": 5,
    },
    {
        "batteryName": "Wmacro-140",
        "capacityAh": 3.6,
        "voltage": 14.4,
        "maxDraw": 14,
        "endVoltage": 5,
    },
    {
        "batteryName": "IOP-E78",
        "capacityAh": 6.6,
        "voltage": 14.4,
        "maxDraw": 10.5,
        "endVoltage": 8,
    },
    {
        "batteryName": "IOP-E140",
        "capacityAh": 9.9,
        "voltage": 14.4,
        "maxDraw": 14,
        "endVoltage": 10,
    },
    {
        "batteryName": "IOP-E188",
        "capacityAh": 13.2,
        "voltage": 14.4,
        "maxDraw": 14,
        "endVoltage": 11,
    },
    {
        "batteryName": "RYN-C65",
        "capacityAh": 4.9,
        "voltage": 14.8,
        "maxDraw": 4.9,
        "endVoltage": 11,
    },
    {
        "batteryName": "RYN-C85",
        "capacityAh": 6.3,
        "voltage": 14.4,
        "maxDraw": 6.3,
        "endVoltage": 12,
    },
    {
        "batteryName": "RYN-C140",
        "capacityAh": 9.8,
        "voltage": 14.8,
        "maxDraw": 10,
        "endVoltage": 12,
    },
    {
        "batteryName": "RYN-C290",
        "capacityAh": 19.8,
        "voltage": 14.4,
        "maxDraw": 14,
        "endVoltage": 12,
    }
];

// sorting of battery name
battery.sort(function(a,b){
    if(a.batteryName > b.batteryName) return 1;
    else return -1;
});

// Battery Class
class Battery {
    constructor(batteryName,capacityAh,voltage,maxDraw,endVoltage){
        this.batteryName = batteryName;
        this.capacityAh = capacityAh;
        this.voltage = voltage;
        this.maxDraw = maxDraw;
        this.endVoltage = endVoltage
    }

    maxWatt(){
        return this.capacityAh * this.voltage;
    }

    endWatt(){
        return this.endVoltage * this.maxDraw;
    }
    
    maxUserHour(sumWatt){
        return (this.maxWatt() / sumWatt).toFixed(1);
    }

    createBattElement(sumWatt){
    
        const battEleDiv = document.createElement('div');
        battEleDiv.classList.add('w-100', 'bg-light', 'border', 'border-secondary', 'd-flex', 'flex-row', 'justify-content-between', 'align-items-center', 'px-3');
        const battNameP = document.createElement('p');
        battNameP.classList.add('pl-2','pr-2', 'pb-2', 'pt-2', 'm-0');
        const battNameS = document.createElement('strong');
        battNameS.innerHTML = this.batteryName;
        battNameP.append(battNameS);
        const battInfoP = document.createElement('p');
        battInfoP.classList.add('pl-2', 'pb-2', 'pt-2', 'mt-0', 'mb-0', 'ml-2', 'mr-2');
        battInfoP.innerHTML = 'Estimate ' + this.maxUserHour(sumWatt) + ' hours';
        battEleDiv.append(battNameP, battInfoP);
        return battEleDiv;
    } 
}

// Battery's instantiation
const batteryObjects = [];
battery.forEach( batt => {
    batteryObjects.push(new Battery(batt['batteryName'], batt['capacityAh'], batt['voltage'], batt['maxDraw'], batt['endVoltage']));
});

// Camera Objects
const camera =
    [{
        "brand": "Cakon",
        "model": "ABC 3000M",
        "powerConsumptionWh": 35.5,
    },
    {
        "brand": "Cakon",
        "model": "ABC 5000M",
        "powerConsumptionWh": 37.2,
    },
    {
        "brand": "Cakon",
        "model": "ABC 7000M",
        "powerConsumptionWh": 39.7,
    },
    {
        "brand": "Cakon",
        "model": "ABC 9000M",
        "powerConsumptionWh": 10.9,
    },
    {
        "brand": "Cakon",
        "model": "ABC 9900M",
        "powerConsumptionWh": 15.7,
    },
    {
        "brand": "Go MN",
        "model": "UIK 110C",
        "powerConsumptionWh": 62.3,
    },
    {
        "brand": "Go MN",
        "model": "UIK 210C",
        "powerConsumptionWh": 64.3,
    },
    {
        "brand": "Go MN",
        "model": "UIK 230C",
        "powerConsumptionWh": 26.3,
    },
    {
        "brand": "Go MN",
        "model": "UIK 250C",
        "powerConsumptionWh": 15.3,
    },
    {
        "brand": "Go MN",
        "model": "UIK 270C",
        "powerConsumptionWh": 20.3,
    },
    {
        "brand": "VANY",
        "model": "CEV 1100P",
        "powerConsumptionWh": 22,
    },
    {
        "brand": "VANY",
        "model": "CEV 1300P",
        "powerConsumptionWh": 23,
    },
    {
        "brand": "VANY",
        "model": "CEV 1500P",
        "powerConsumptionWh": 24,
    },
    {
        "brand": "VANY",
        "model": "CEV 1700P",
        "powerConsumptionWh": 25,
    },
    {
        "brand": "VANY",
        "model": "CEV 1900P",
        "powerConsumptionWh": 26,
    }
];

// Camera class
class Camera {
    constructor(brand, model, powerConsumptionWh){
        this.brand = brand;
        this.model = model;
        this.powerConsumptionWh = powerConsumptionWh;
    }

    createModelElement(brand, index){
        const optionEle = document.createElement("option");
        optionEle.value = index;
        optionEle.innerHTML = this.model;
        return this.brand === brand ? optionEle : null;

    }
}


// sorting of Camera's model name
const cameraSort = camera.sort(function(a,b){
    if(a.model > b.model){
        return 1
    }else{
        return -1
    }
});

// Camera's instantiation
let cameraObjects = [];
cameraSort.forEach(camera1 => {
    cameraObjects.push(new Camera(camera1['brand'],camera1['model'],camera1['powerConsumptionWh']));
});

// create brand choices
let brandsDic = {};
camera.forEach( dict => {
    brandsDic[dict['brand']] = 1;
});

const brands = Object.keys(brandsDic).sort();

const pulldown_brand = document.getElementById("pulldown_brand");
brands.forEach( brand => {
    const optionEle = document.createElement('option');
    optionEle.value = brand;
    optionEle.innerHTML = brand;
    pulldown_brand.append(optionEle)
})

// create initial model choices
const pulldown_model = document.getElementById("pulldown_model");
cameraObjects.forEach((cameraObj, index ) => {
    pulldown_model.append(cameraObj.createModelElement(brands[0], index));
})

// update model data if choose something brand 
pulldown_brand.addEventListener('change', e => {
    pulldown_model.innerHTML = ""
    cameraObjects.forEach((cameraObj, index) => {
        pulldown_model.append(cameraObj.createModelElement(e.target.value, index));
    });
    updateBattList();
})

// update battery list if update camera data
pulldown_model.addEventListener('change', updateBattList);

// geting of input power consumption
const input_battery = document.getElementById("input_battery");
input_battery.addEventListener('change',updateBattList);


var tableList = document.getElementById("battery-list");

// it can updatte battery list if use updateBattListfunction
function updateBattList(){
    const sumWatt = parseInt(input_battery.value) + cameraObjects[pulldown_model.value].powerConsumptionWh;
    batteryTopDiv.innerHTML = '';
    batteryObjects.forEach((batt) => {
        if (batt.endWatt() > sumWatt){
            batteryTopDiv.append(batt.createBattElement(sumWatt));
        }
    });
}

const startButton = document.getElementById("start-button");
startButton.addEventListener('click',function(){
    startButton.style = "display:none;"
    pulldown_brand.style = "";
    pulldown_model.style = "";
    input_battery.style = "";

    // create initial battery list
    const batteryTopDiv = document.getElementById("battery-list")
    batteryObjects.forEach( battObj => {
        batteryTopDiv.append(battObj.createBattElement(parseInt(input_battery.value) + cameraObjects[pulldown_model.value].powerConsumptionWh));
});

})