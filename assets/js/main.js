// =========================================
// lvl_1_1
// =========================================
let a = 12;
let b = a * 3;
console.log(b);

// =========================================
// lvl_1_1_2
// =========================================
let firstName = "Anton";
console.log(firstName);

let age = 28;
console.log(age);

let job = "Trainer";
console.log(job);

let married = true;
console.log(married);

console.log(
  firstName +
    " ist " +
    age +
    " Jahre Alt" +
    "," +
    " von Beruf er ist" +
    job +
    " und ist verheiratet: " +
    married
);

// =========================================
// lvl_1_4
// =========================================
// window.alert("Hallo Welt");
// window.prompt("Bitte geben Sie Ihren Namen ein.");
// window.prompt("Bitte geben Sie Ihren Namen ein", "Cancel");
// window.confirm("Stimmen Sie meiner Meinung zu?");

let alter = window.prompt("Gib mir bitte dein Alter:");
console.log(alter);
let b = 5;
let a = b * 5 - 3;
window.alert(a);
let mann = "Robert Wadlow ist der größte Mann der Welt : ";
let grosse = "2,72m";
window.confirm(mann + grosse);

// =========================================
// lvl_1_5
// =========================================
let carName = "BMW";
console.log(carName);
let x = 150;
let y = 50;
let z = x + y;
console.log(z);

let firstName = "John";
let lastName = "Doe";
let age = 35;
console.log(firstName, lastName, age);

// =========================================
// lvl_1_6
// =========================================
let x = 34;
x = 67;
console.log(x);
// ist 67

const y = 34;
y = 67;
console.log(y);
// ist 67
// "constant" darf man nicht ändern
// =========================================
// lvl_1_7
// =========================================

let helloWorld = "Hello World";
console.log(helloWorld);

const pi = 3.14;
console.log(pi);

const burjDubai = "828m";
console.log(burjDubai);

let fullName = "Jan Schmidt";
console.log(fullName);

const eifelTower = "324m";
console.log(eifelTower);

const camelCase = "camelCase";
console.log(camelCase);

let kursStatus = true;
console.log(kursStatus);

// =========================================
// lvl_1_12
// =========================================
let score1 = 5 + 5 * 10;
console.log("Ergebnis: " + score1);

let score2 = (5 + 5) * 10;
console.log("Ergebnis: " + score2);

let score3 = 0;
score3 = score3 + 10;
console.log("Ergebnis: " + score3);
score3 += 10;
console.log("Ergebnis: " + score3);

let zahl = 1;
zahl = zahl + 1;
console.log(zahl);
zahl++;
console.log(zahl);
zahl--;
console.log(zahl);

// =========================================
// lvl_1_13
// =========================================

// Addition
let addition_operator = 1 + 1;
console.log("addition: " + addition_operator);

// Subtraktion
let subtraktion_operator = 2 - 1;
console.log("subtraktion: " + subtraktion_operator);

// Multiplikation
let multiplication_operator = 2 * 2;
console.log("multiplication: " + multiplication_operator);

// Division
let division_operator = 4 / 2;
console.log("division: " + division_operator);

// Modul: zeigt an, was der Rest sein würde.
let modulus_operator = 14 % 5;
console.log("modulus: " + modulus_operator);
