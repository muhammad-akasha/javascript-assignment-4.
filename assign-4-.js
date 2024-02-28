//assignment -4-

// no_1 : declare 3 variable in one statement
let student = {
  name: "muhammad akasha",
  f_name: "muhammad shahzad",
  age: 23,
};
console.log(student);

// // no_2 declare 3 legal and 3 illegal variable name.

// // legal variable :  1:  $name 2: _my_age 3: f_$name1 ; dollor and underscore are allowed and number are only allowed in end and between  text ..  ;

// // illegal variable name : 1: 1name  ; 2: -name; 3 : #@ name ;

let a_heading = document.createElement("h1");
let $heading = document.createTextNode("Rules for naming JS variables");
a_heading.append($heading);
let add = document.getElementById("div4");
add.append(a_heading);

let a_heading_1 = document.createElement("p");
let $heading_1 = document.createTextNode(
  "1- variable are only contain $ and _ for example $my_name"
);
a_heading_1.append($heading_1);
let add_1 = document.getElementById("div4");
add_1.append(a_heading_1);

let a_heading_2 = document.createElement("p");
let $heading_2 = document.createTextNode(
  "2-variable must begin with $,letter or _ . for example $name , _name or name"
);
a_heading_2.append($heading_2);
let add_2 = document.getElementById("div4");
add_2.append(a_heading_2);

let a_heading_3 = document.createElement("p");
let $heading_3 = document.createTextNode("3- variables are case sensitive");
a_heading_3.append($heading_3);
let add_3 = document.getElementById("div4");
add_3.append(a_heading_3);

let a_heading_4 = document.createElement("p");
let $heading_4 = document.createTextNode(
  " 4- variables name should not be js keyword"
);
a_heading_4.append($heading_4);
let add_4 = document.getElementById("div4");
add_4.append(a_heading_4);

document.getElementById("div4").style.fontSize = "25px";
document.getElementById("div4").style.color = "red";
document.getElementById("div4").style.border = "10px solid purple";
document.getElementById("div4").style.marginTop = "100px";