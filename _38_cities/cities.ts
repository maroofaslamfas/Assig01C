function describe_city(city: string, country = "Pakistan"){
    console.log(`${city} is in ${country}`);
}

describe_city("Fort Abbas");
describe_city("Lahore");
describe_city("Ferozpore", "India")