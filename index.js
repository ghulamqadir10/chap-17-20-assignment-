// Question no 1;
var multidimensional_array = [[], [], []]; //multidimensional[0,1,2,3]

// question no 2;
document.write("<h2>multidimensional array matrix</h2>");
multidimensional_array[0] = [0, 1, 2, 3];
multidimensional_array[1] = [1, 0, 1, 2];
multidimensional_array[2] = [2, 1, 0, 1];

document.write("<h4>", multidimensional_array, "</h4>");
document.write("<h4>", multidimensional_array[0], "</h4>");
document.write("<h4>", multidimensional_array[1], "</h4>");
document.write("<h4>", multidimensional_array[2], "</h4>");

// Question no 3
document.write("<h2>numeric counting from 1 to 10</h2>");
for (i = 1; i <= 10; i++) {
  document.write(i + "<br>");
}

// Question no 4

var table_num = +prompt("Enter a number to show its multiplication table");
var table_length = +prompt("Enter length multiplication table");
document.write("<h2>Table of length ", table_length, "</h2>");
if (isNaN(table_num) || isNaN(table_length)) {
  alert("you input an invalid number");
  document.write("you input an invalid number");
} else {
  for (i = 1; i <= table_length; i++) {
    document.write(table_num, " * ", i, " = ", table_num * i + "<br>");
  }
}

// Question no 5
document.write("<h2>print fruit items</h2>");

let fruits = ["apple ,", " banana ,", " mango ,", " orange, ", " strawberry "];

for (i = 0; i < fruits.length; i++) {
  document.write(fruits[i]);
}
for (i = 0; i < fruits.length; i++) {
  document.write("<h4>Element at index ", i, " is ", fruits[i] + "<h4>");
}

// Question no 6

document.write("<h2> loop practices</h2>");
document.write("<h3>counting:", "</h3>", "<br>");
for (i = 1; i <= 14; i++) {
  document.write(i + ",");
}
document.write("<h3>reverse counting:", "</h3>", "<br>");
for (i = 10; i >= 1; i--) {
  document.write(i + " , ");
}
document.write("<h3>Even:", "</h3>", "<br>");
for (i = 0; i <= 20; i += 2) {
  document.write(i + " , ");
}
document.write("<h3>Odd:", "</h3>", "<br>");
for (i = 1; i <= 19; i += 2) {
  document.write(i + ",");
}
document.write("<h3>Series:", "</h3>", "<br>");
for (i = 2; i <= 20; i += 2) {
  document.write(i, "k", ",");
}

// Question no 7
document.write("<h2>Bakery items</h2>");
var A = [
  "cake",
  "apple pie",
  "cookie",
  "chips",
  "patties",
  "pastry",
  "sandwich",
];
var input_order = prompt("Welcome to ABC bakery what do you want to order");
let flags = false;
for (i = 0; i < A.length; i++) {
  if (A[i].includes(input_order)) {
    //.includes use krna ka mtlb hai ka kisi cheez ma pata karana ka isma hai ka nhi  for example: hum yahan check kr rha hain ka (A ka anndar order input ma di hui koi cheez same hai ya nhi .
    flags = true;
    document.write(A[i], " is avalible at index ", i, " in our bakery");
    break;
  } //Q 7 little confusing
}
if (!flags) {
  alert("we are sorry " + input_order + " is not avalible in our bakery");
}

// Question no 8
document.write("<h2>largest number</h2>");
let numbers = [22, 33, 12, 47, 88, 99, 100];
// // let largest_num=Math.max(...numbers)                //we can  also make variable then add and did work
document.write("Array items: ", numbers, "<br>");
document.write("The largest number is ", Math.max(...numbers));         //Math.max means used  to determine a large num in array

//

//question 9..

document.write("<h2>Smallest number</h2>");
let number = [12, 22, 109, 121, 321, 323, 12, 8];
document.write("Array items: ", number,"<br>" );
document.write("The smallest number is " , Math.min(...number) );       //Math.min means used  to determine a small num in array

// Question 10

// document.write("<h1>  Multiple of 5 to 100 </h2>");
// let numbers_ = [];

// for (let i = 5; i <= 100; i += 5) {                   //push is used to add number and string at the the end
//   numbers_.push(i);
// }

// document.write("<h2>", numbers_.join (" . ") , "</h2>");                //.join is used to join  the separators or urdu ma comas ya spaces /

// question no 10
document.write("<h2>Multiple of 5  to 100</h2>");
for (i = 5; i <= 100; i += 5) {
  document.write(i, " , ");
}
