let balance = 10000;

while (true) {
    
    let option = parseInt(prompt("\n1. Check Balance\n2. Deposit Money \n3. Withdraw Money\n4. Exit\n Enter your option:"));

    if (option === 1) {
        console.log("Your balance is: $" + balance);
    }
    else if (option === 2) {
        let amount = parseInt(prompt("Enter amount to deposit:"));
        if (amount > 0) {
            balance += amount;
            console.log("Deposited $" + amount);
            console.log("New Balance: $" + balance);
        } else {
            console.log("Invalid deposit amount!");
        }
    }
    else if (option === 3) {
        let amount = parseInt(prompt("Enter amount to withdraw:"));
        if (amount <= 0) {
            console.log("Invalid withdrawal amount!");
        } else if (amount > balance) {
            console.log("Insufficient Balance!");
        } else {
            balance -= amount;
            console.log("Withdrew $" + amount);
            console.log("Remaining Balance: $" + balance);
        }
    }
    else if (option === 4) {
        console.log("Thank you for using our ATM!");
        break;
    }
    else {
        console.log("Invalid Option! Please try again.");
    }
}