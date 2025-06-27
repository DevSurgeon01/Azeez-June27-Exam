### OVERVIEW: JAVASCRIPT FUNCTION
- Use the "forEach()" method to loop over the array and print
```
var donuts = [
    {type: "Jelly", cost: 1.22},
    {type: "Chocolate", cost: 2.45},
    {type: "Cider", cost: 1.59},
    {type: "Boston", cost: 1.22}
];
donuts.forEach(function(donut){
    console.log(donut.type+" donuts cost $"+donut.cost+" each");
});


var savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function addMoney (amount){
        if (amount > 0){
            savingsAccount.balance += amount;
        }
    },
    withdraw: function removeMoney (amount){
        var verifyBalance = savingsAccount.balance - amount;
        if (amount > 0 && verifyBalance >= 0){
            savingsAccount.balance -= amount;
        }
    },
    printAccountSummary: function(){
        return "Welcome! \n Your balance is currently $" + savingsAccount.balance
        + " and your interest rate is " + savingsAccount.interestRatePercent
        + "%. "
    }
    
};
console.log (savingsAccount.printAccountSummary());




var facebookProfile = {
    name: "Azeez",
    friends: "25",
    messsages: ["Message 1", "Message 2", "Message 3"],
    postMessage: function (message) {
        facebookProfile.messsages.push(message);
    },
    deleteMessage: function (index){
        facebookProfile.messsages.splice(index, 1);
    },
    addFriend: function(){
        facebookProfile.friends += 1;
    },
    removeFriend: function(){
        if (facebookProfile.friends > 0)
            facebookProfile.friends -= 1;
    }
};
console.log(facebookProfile.friends);

```

### BACK-END DEVELOPMENT
- Back-end development means working on server-side software, which focuses on everything you can't see on a website. Back-end developers ensure the website performs correctly, focusing on databases, back-end logic, application programming interface (APIs), architecture, and servers.

### PRIMITIVE DATA TYPES
- In JavaScript, there are 7 primitive data types: string, number, bigint, boolean, symbol, undefined, and null.

- What is the difference between let and var and const in JavaScript?
let can be updated but cannot be re-declared into the scope. const cannot be updated or re-declared into the scope. var can be declared without initialization. let can be declared without initialization.

- Var declarations are globally scoped or function scoped while let and const are block scoped. var variables can be updated and re-declared 

- Some of the ways to add property to object JavaScript include: using dot notation, using bracket [ ] notation, using defineProperty() method, using spread operator, and using Object. assign() method. e.g. object['property'] = value; or obj.property = value; Replace object with the name of the object you want to add the property to, property with the name of the new property, and value with the value you want to assign to the property.

### JAVASCRIPT OPERATOR TYPES AND EXPRESSIONS

- J.Operators: are special symbols used to perform operation on variables, values,or expressions. They help us to manipulate data and structure our algorithms.

- JavaScript operators are symbols that perform operations on values (operands). These operations can include assignment, comparison, arithmetic calculations, logical evaluations, and bitwise manipulations. 

- Assignment Operators:
= (Assignment): Assigns a value to a variable.
+=, -=, *=, /=, %=, **=: Compound assignment operators.
```
let a = 10;
a = a + 20; 
a += 5; 
a -= 20;
a = 20 * 30;
a *= 10;
a = 10 / 2;
a /= 2;
## Module (%): remainder after division
a = 5 % 3;
a %= 7;
a = 2 ** 3;
a **= 3;
console.log(a);
```

- Arithmetic Operators:
- + (Addition), - (Subtraction), *(Multiplication), / (Division), % (Modulus/Remainder), ** (Exponentiation), ++ (Increment), -- (Decrement)

```
let a = 10;
let b = 20;
let operation = a + b;
let operation = a - b;
let operation = a * b;
let operation = a / b;
console.log(operation);

a = a + 1;
a++;
a--;
console.log(a);
```

- Comparison Operators:
- == (Equal to - value only)
- === (Strict equal to - value and type)
- (!= Not equal to - value only)
- (!== Strict not equal to - value and type)
- > (Greater than)
- < (Less than)
- >= (Greater than or equal to)
- <= (Less than or equal to)

- Logical Operators:
- && (Logical AND)
- || (Logical OR)
- (! Logical NOT)

- Bitwise Operators:
- (perform operations on the binary representation of data)
- & (Bitwise AND)
- | (Bitwise OR)
- ^ (Bitwise XOR)
- ~ (Bitwise NOT)
- << (Left shift)
- >> (Right shift)
- >>> (Unsigned right shift)
- Special Operators:
- ? : (Ternary operator)
- , (Comma operator)
- typeof (determines the type of a variable)
- delete (deletes a property from an object)
- in (checks if a property exists in an object)
- instanceof (checks if an object is an instance of a class)
- Operators are crucial for manipulating data, making decisions in code, and building complex logic in JavaScript programs.


### CONTROL STRUCTURE (IF ELSE, SWITCH STATEMENTS)
- if...else Statements
- The if...else statement executes a block of code if a specified condition is true. An optional else block can be included to execute a different block of code if the condition is false. Multiple conditions can be chained together using else if.

- if(condition = "rain"){
-     console.log("go to farm");
- }

```
const gender = "Male"
if (gender == "Male") {
    console.log("Hello Sir");
} else {
    console.log("Hello Ma");
}

const gender = "Female"
if (gender == "Male") {
    console.log("Hello Sir");
} else if (gender == "Female") {
    console.log("Hello Ma");
} else {
    console.log("Hello Trans")
}

let age = 45;
if (age >= 18){
    console.log("You are an adult.");
} else if (age >= 13){
    console.log("You are a teenager.")
} else {
    console.log("You are a child!")
}

let dTime = 16;

if (dTime < 12){
    console.log("Good morning...");
} else if (dTime < 16){
    console.log("Good afternoon...")
} else if (dTime < 19){
    console.log("Good evening...")
} else {
    console.log("Good night!")
}
```


#### SWITCH STATEMENT
- The switch statement evaluates an expression, matching its value against a series of case clauses. When a match is found, the code block associated with that case is executed. The break statement is typically used to exit the switch after a case is executed, preventing fall-through to subsequent cases. A default case can be included to handle situations where no other case matches.

```
const gender = "Female";
   // now we greet
switch (gender) {
    case "Male":
        console.log("Hello Sir");
        break;
    case "Female":
        console.log("Hello Ma");
        break;
    default:
        console.log("Hello Trans");
}

const dTime = 2;

switch(true){
    case dTime < 12:
        console.log("Good morning...");
        break;
    case dTime < 16:
        console.log("Good afternoon...");
        break;
    case dTime < 19:
        console.log("Good evening...");
        break;
    default:
        console.log("Good night!");
}


let day = "Tuesday";

switch (day) {
    case "Sunday":
        console.log("It's the start of the week.");
        break;
    case "Saturday":
        console.log("It's the weekend.");
        break;
    default:
        console.log("It's a regular day.")
}
```

### FUNCTIONS
- function declaration (prev class)
- In JavaScript, parameters are variables that you list as part of a function definition. They act as placeholders for values that will be passed to the function when it is called. We use parameters in function declarations to give functions the ability to receive input and perform actions based on that input.

```
const baseValue = 20;

function add(a,b){
    
    const total = a + b;
    console.log(total * baseValue);
}
add(10,20)  
```

- Function expression OR arrow function
```
const sub = (a,b) => {
    const baseAdd = 10;
    const total = a - b;
    console.log(total * baseAdd);
};
sub(28,23);

const firstName = "Azeez"

function callHim(){
    const lastName = "Math";
    console.log(firstName, lastName);
}
callHim();
```

### RETURN FUNCTION (to reuse in many ways)
```
function add(a,b){
    
    const total = a + b;
    return total;
}
firstAdd = add(50,70);

console.log(firstAdd); 
console.log(add(60,90)); 
```

- HOISTING
- You can hoist function declaration BUT not function expression or Arrow Function

```
const showAdds = addNumber(3,10);
console.log(showAdds)

function addNumber(a,b){
    
    const total = a + b;
    return total;
}
```


### EXPORT A FUNCTION FROM ANOTHER FILE INTO A FILE
### DEFAULT EXPORT and NAME EXPORT

```
// this is a default export, addNum can be any name
const addNum = require("./add")
// const subNum = require("./sub")

//we call the name specifically
const {subNumA,subNumB} = require("./sub")

const totalAdd = addNum(3,3);
// const totalSub = subNum(20,14);
const totalSub = subNumA(20,14);

console.log(totalAdd);
console.log(totalSub);

```

### TYPES OF ARRAY METHOD