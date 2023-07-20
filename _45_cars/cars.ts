function store_car_Info(manufecturer: string, model: string, obj?: object){
    if (!obj) {
        let car_Info = {Manufacturer: manufecturer, Model_Name: model};
        return car_Info;
    } else{
        let car_Info = {Manufacturer: manufecturer, Model_Name: model, obj};
        return car_Info;
    }
}

console.log(`Function call without arbitrary inofrmation: \n`, store_car_Info("Honda", "City"));
console.log(`Function call without arbitrary inofrmation: \n`, store_car_Info("Honda", "City", {color: "black", door_alarm: "Honking"}));