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
    }]
;

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
    }]
;

// id-button
const startButton = document.getElementById("start-button");

// id-pulldown id-input
const pulldown_brand = document.getElementById("pulldown_brand");
const pulldown_model = document.getElementById("pulldown_model");
const input_battery = document.getElementById("input_battery")

// id-table list
const tableList = document.getElementById("table-list")

 
// main

startButton.addEventListener("click",function(){
    startButton.style = "display:none;"
    pulldown_brand.style = ""
})

pulldown_brand.addEventListener("change",function(){
    if(pulldown_brand.value === ""){
        pulldown_model.style = "display:none;"
        input_battery.style = "display:none;"
    }else{
        modelList = searchModel(pulldown_brand.value)
        makePulldownModel(modelList)
        pulldown_model.style = ""
        input_battery.style = ""
    }

    
})

input_battery.addEventListener("change",function(){
    
    let powerConsumptionWh = searchPowerConsumptionWh(pulldown_model.value);
    let dataList = checkBattery(powerConsumptionWh);
    let batteryObjList = dataList[0]
    let batteryTimeList = dataList[1]
    batteryViewList(batteryObjList,batteryTimeList)
    
})



// function
function searchModel(brand_value){
    var modelList = []
    for(let cameraData of camera){
        console.log(cameraData.model)
        if(brand_value === cameraData.brand){
            modelList.push(cameraData.model)
        }
    }
    return modelList
}

function searchPowerConsumptionWh(model_value){
    let pcw = 0;
    for(let cameraData of camera){
        if(model_value === cameraData.model){
            return pcw = cameraData.powerConsumptionWh
        }
    }

}

function makePulldownModel(modelList){
    pulldown_model.innerHTML = ""
    for (let model of modelList){
        const data = document.createElement("option")
        data.innerHTML = model
        data.value = model
        pulldown_model.append(data)
    }
}


function checkBattery(pwc){
    var batteryDataList = []
    var takeTimeList = []

    for(let batteryData of battery){
        let bd = batteryData
        let sumWh = bd.voltage * bd.capacityAh;
        let takeTime = sumWh / pwc;

        let maxOutput = bd.maxDraw * bd.endVoltage

        if(maxOutput >= pwc){
            batteryDataList.push(batteryData);
            takeTimeList.push(takeTime);

        }

    }return [batteryDataList, takeTimeList]

}

function batteryViewList(batteryObjList, batteryTimeList){
    tableList.innerHTML = ""

    for (i=0; i < batteryObjList ; i++){
        
        
        let table = `
        <div class="d-flex justify-content-between table-background-color border border-dark">
            <p class="m-3">${batteryObj[i].batteryName}</p>
            <p class="m-3">${batteryTime[i]}</p>
        </div>
        `
        tableList.append(table)


    }
    
    
}