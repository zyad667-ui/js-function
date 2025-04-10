
//* / Exercise 1:
//*  Greetings
// Create a function called greet that takes a name parameter and prints a greeting message to the console. Call the function with different names.
function greeting(name) {
    console.log("hello, " + name + "  welcome ");
}

greeting("alice")
greeting("drogba")
greeting("pablo")
greeting("zyad")

//* Exercise 2: Sum of Numbers
//* Create a function called sumNumbers that takes an array of numbers as a parameter and returns the sum of those numbers. Call the function with different arrays.

function numbers(chiffre) {
    let num = 0
    for (let index = 0; index < chiffre.length; index++) {
        num += chiffre[index];

    }
    return num
}
console.log(numbers([1, 2, 3, 4]));
console.log(numbers([10, 20, 30]));
console.log(numbers([-5, 5, 10, -10]));
console.log(numbers([600, 66, 0, -66, +66]));


//* Exercise 4: Even or Odd
//* Create a function called isEven that takes a number as a parameter and prints whether the number is even or odd to the console. Use an if-else statement. Call the function with different numbers.

function isEven(even) {
    even % 2 === 0 ? console.log(even + " is even") : console.log(even + " is odd")
}


isEven(4);
isEven(7);
isEven(0);
isEven(-3);
isEven(10);

// *Exercise 6: Palindrome Check
//* Create a function called isPalindrome that takes a string as a parameter and prints whether the string is a palindrome (reads the same backward as forward) to the console. Ignore spaces and case. Use loops and conditional statements. Call the function with different strings.
function checkPalindrom(palindrome) {
    let clean = "";
    for (let i = 0; i < palindrome.length; i++) {
        if (palindrome[i] !== " ") {
            clean += palindrome[i].toLowerCase();
        }
    }
    for (let i = 0; i < clean.length / 2; i++) {
        if (clean[i] !== clean[clean.length - 1 - i]) {
            console.log("not palindrome frérot");
            return;
        }
    }
    console.log("palindrome");
}
checkPalindrom("race car");
checkPalindrom("pop");
checkPalindrom("la passion");
//* ex7
function maxOfTwo(a, b) {
    if (a > b) {
        console.log(`${a} is greater`);
    } else if (b > a) {
        console.log(`${b} is greater`);
    } else {
        console.log(`${a} ${b} Both numbers are equal`);
    }
}

maxOfTwo(10, 5);
maxOfTwo(8, 54);
maxOfTwo(0, 5);
maxOfTwo(10, 547);
maxOfTwo(110, 5);
maxOfTwo(5, 5);

//* ex8
function arrsum(nbr) {
    let sum = 0;
    for (let y of nbr) {
        sum += y;
    }
    console.log("la somme est :" + sum)
}
arrsum([1, 2, 3, 4, 7, 8])
arrsum([10, 20, 30, 40])


//* ex9
function factorial(n) {
    let result = 1
    for (let index = 0; index < n.length; index++) {
        result = index;
    }
    console.log("la factorel de " + n + "est" + result)
}
factorial(7)
factorial(8)
factorial(45)
factorial(5)

//* ex 10
function vooyel(lettre) {
    let vowels = "aeiouAEIOU";

    if (vowels.includes(lettre)) {
        console.log(lettre + "est une voyelle;")
    }
    else {
        console.log(lettre + "n'est pas une voyelle")
    }
}
vooyel("a")
vooyel("z")
vooyel("y")
vooyel("a")
vooyel("d")

//* ex11
function biggie(a3dad) {
    let max = Math.max(...a3dad);
    console.log("le plus grand nombre est :" + max)
}
biggie([1, 45, 1, 47, 1, 25, 2])
biggie([1, 114, 7255, 452])

//* ex12
// function isPrime(number) {
//     if (number < 2) {
//         console.log(number + " is not a prime number.");
//         return;
//     }

//     let isPrime = true;

//     for (let i = 2; i < number; i++) {
//         if (number % i === 0) {
//             isPrime = false;
//             break;
//         }
//     }

//     if (isPrime) {
//         console.log(number + " is a prime number.");
//     } else {
//         console.log(number + " is not a prime number.");
//     }
// }

// isPrime(1);
// isPrime(2);
// isPrime(5);
//* ex13
function sumofdigits(nbrs) {
    let some = 0
    let str = nbrs.toString();
    for (let digit of str) {
        some += parseInt(digit);

    }
    console.log(`la somme des chiffres de ${nbrs} est ${some} `)
}
sumofdigits(123)
sumofdigits(14754)

//* ex bonus
function arrayIntersection(arr1, arr2) {
    return arr1.filter(element => arr2.includes(element));
}
console.log(arrayIntersection([1, 2, 3, 4], [3, 4, 5, 6]));
//*   ex fibonacci
function helperFibonacci(n) {
    let number1 = 0;
    let number2 = 1;

    for (i = 0; i < n; i++) {
        let current = number1 + number2;
        number1 = number2;
        number2 = current;
        console.log(current);
    }
}
helperFibonacci(2);