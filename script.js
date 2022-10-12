const capitalize  = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const reverseString = (string) => {
    //return string.split("").reverse().join();
    let newString = "";
    for(let i = string.length - 1; i >= 0; i--)
        newString += string[i];
    
    return newString;
}

const calculator = (num1, num2, method) => {
    switch(method) {
        case 'plus' : {
            return num1 + num2;
            break;
        }
        case 'minus' : {
            return num1 - num2;
            break;
        }
        case 'multiply' : {
            return num1 * num2;
            break;
        }
        case 'divide' : {
            return num2 === 0 ? "Can't divide 0" : num1 / num2;
            break;
        }
    }
}

const analyzeArray = ([array]) => {
    let sum = 0;
    const object = {
         average : sum / array.length,
         min : 0,
         max : 0,
         length : array.length,
    }
    for(i = 0; i < array.length; i++) {
        if(array[i] > object.max) object.max = array[i];
        if(array[i] < object.min) object.min = array[i];
        sum += array[i];
    }

    return object;
}
export {capitalize, reverseString, calculator, analyzeArray};