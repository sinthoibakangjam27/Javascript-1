function checkTemperature(temperature) {
    let message = " ";

    if (temperature < 20) {
        message = "Cold";
    } 
    else if (temperature >= 20 && temperature <= 30) {
        message = "Normal";
    } 
    else {
        message = "Hot";
    }

    return message;
}

// Test the function
console.log(checkTemperature(17));
console.log(checkTemperature(29));
console.log(checkTemperature(33));