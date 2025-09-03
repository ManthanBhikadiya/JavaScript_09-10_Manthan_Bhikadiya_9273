{
    function validateNumber(number) {
        const pattern = /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

        if (pattern.test(number)) {
            console.log("Number is valid.");
            return true;
        } else {
            const newNumber = prompt("Invalid number! Please enter again:");
            return validateNumber(newNumber);
        }
    }

    const userInput = prompt("Enter a mobile number:");
    validateNumber(userInput);
}


{
    function validateEmail(Email) {
        const pattern = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/ ;

        if (pattern.test(Email)) {
            console.log("Email is valid.");
            return true;
        } else {
            const newEmail = prompt("Invalid Email! Please enter again:");
            return validateEmail(newEmail);
        }
    }

    const userInput = prompt("Enter a Email:");
    validateEmail(userInput);
}

{
    function validateIp(Ip) {
        const pattern = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/ ;

        if (pattern.test(Ip)) {
            console.log("Ip is valid.");
            return true;
        } else {
            const newIp = prompt("Invalid Ip! Please enter again:");
            return validateIp(newIp);
        }
    }

    const userInput = prompt("Enter a Ip:");
    validateIp(userInput);
}

{
    function validateDate(Date) {
        const pattern = /^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}$/;

        if (pattern.test(Date)) {
            console.log("Date is valid.");
            return true;
        } else {
            const newDate = prompt("Invalid Date! Please enter again:");
            return validateDate(newDate);
        }
    }

    const userInput = prompt("Enter a Date:");
    validateDate(userInput);
}