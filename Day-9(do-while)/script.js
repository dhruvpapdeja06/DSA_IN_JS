// do-while loop --> exit control loop ,task repeatedly perform , task without checking the cond execute

// atm machine --> first ask the machine , first task without asking execution ho jaye.

/*
let i = 1;
do{
    console.log("heyy")
    i++;
}while(i < 10) */

// Loop work when user enter 1 else not work

/*
let prompt = require("prompt-sync")();
let n;

do{
    console.log("hello world");
    n = prompt("Enter the number");
}while(n == 1) */

// Guess the number program

let prompt = require("prompt-sync")();

/*
let computer = Math.floor(Math.random()*100 + 1);
let user, attempt;

do{
    attempt++;
    user = Number(prompt("Enter a number between 1 and 100 "));
    if (user > computer) console.log("Too large");
    else if (user < computer) console.log("Too small");
    else if (user == computer) console.log("Congrats! You guess the number correctly in this" + attempt +" ");
    else console.log("Invalid number");
}while (user != computer)  */

// Sasta calculator
/*
do{
    console.log("Enter 1. For Addition");
    console.log("Enter 2. For Substraction");
    console.log("Enter 3. For Multiplication");
    console.log("Enter 4. For Division");
    n = Number(prompt("Enter a number"));

    switch(n){
        case 1: {
            let first = Number(prompt("Enter the first number"));
            let second = Number(prompt("Enter the second number"));
            console.log("Additon : "+ (first+second));
            break;
        }
        case 2: {
            let first = Number(prompt("Enter the first number"));
            let second = Number(prompt("Enter the second number"));
            console.log("Subraction : "+ (first-second));
            break;
        }
        case 3: {
            let first = Number(prompt("Enter the first number"));
            let second = Number(prompt("Enter the second number"));
            console.log("Multiplication : "+ (first*second));
            break;
        }
        case 4:{
            let first = Number(prompt("Enter the first number"));
            let second = Number(prompt("Enter the second number"));
            console.log("Division : "+ (first/second));
            break;
        }
        default: console.log("Invalid Number");
    }
    n = Number(prompt("Enter 10 for recontinue the program"))
}while(n == 10);

*/

// Resturant menu based program

do{
    console.log("\t Menu");
    console.log("....................");
    console.log("Press 1. For Indian ");
    console.log("Press 2. For Chinese ");
    console.log("Press 3. For Italian ");
    console.log("Press 4. For Fast Food ");
    console.log("Press 5. For Deserts ");
    console.log("Press 9. For Continue ");

    choice = Number(prompt("Enter you choice "));
    switch(choice){
        case 1:{
            console.log(" ");
            console.log("Press 1. Butter Chicken ");
            console.log("Press 2. Paneer Tikka ");
            console.log("Press 3. Masala Dosa ");
            console.log("Press 4. Chole Bhature ");
            console.log("Press 5. Biryani ");
            
            item = Number(prompt("Order your food "));
            console.log("Your food order successfully ");
            break;
        }

        case 2:{
            console.log(" ");
            console.log("Press 1. Veg Hakka Noodles ");
            console.log("Press 2. Chicken Manchurian ");
            console.log("Press 3. Spring Rolls ");
            console.log("Press 4. Schezwan Fried Rice ");
            console.log("Press 5. Hot & Sour Soup ");
            
            item = Number(prompt("Order your food "));
            console.log("Your food order successfully ");
            break;
        }
        case 3:{
            console.log(" ");
            console.log("Press 1.Margherita Pizza");
            console.log("Press 2. Alfredo Pasta ");
            console.log("Press 3. Lasagna ");
            console.log("Press 4. Garlic Bread ");
            console.log("Press 5. Risotto ");
            
            item = Number(prompt("Order your food "));
            console.log("Your food order successfully ");
            break;
            
        }
        case 4:{
            console.log(" ");
            console.log("Press 1. Veg Burger ");
            console.log("Press 2. Chicken Burger ");
            console.log("Press 3. Fries ");
            console.log("Press 4. Momos ");
            console.log("Press 5. Cheese Sandwich ");
             

            item = Number(prompt("Order your food "));
            console.log("Your food order successfully ");
            break;
        }
        case 5:{
            console.log(" ");
            console.log("Press 1. Gulab Jamun ");
            console.log("Press 2. Brownie with Ice Cream ");
            console.log("Press 3. Cheesecake ");
            console.log("Press 4. Rasmalai ");
            console.log("Press 5. Chocolate Mousse ");
        
            item = Number(prompt("Order your food "));
            console.log("Your food order successfully ");
            break;
        }
        default: console.log("Invalid Option");1
    }

}while(choice == 9)