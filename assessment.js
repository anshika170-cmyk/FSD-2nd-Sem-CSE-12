let students = [];

// Add student
function addStudent(){

let name=document.getElementById("name").value;
let rno=document.getElementById("rno").value;
let maths=Number(document.getElementById("maths").value);
let science=Number(document.getElementById("science").value);
let english=Number(document.getElementById("english").value);

if(name=="" || rno==""){
alert("Enter all details");
return;
}

let student={
name:name,
roll:rno,
maths:maths,
science:science,
english:english
};

students.push(student);

alert("Student Added");
}

// Display all students
function displaystudents(){

let text="<h3>Students</h3>";

for(let i=0;i<students.length;i++){

text+=students[i].name+" (Roll:"+students[i].roll+")<br>";

}

document.getElementById("output").innerHTML=text;

}

// Total marks
function totalmarks(){

let text="<h3>Total Marks</h3>";

for(let s of students){

let total=s.maths+s.science+s.english;

text+=s.name+" : "+total+"<br>";

}

document.getElementById("output").innerHTML=text;

}

// Average marks
function averagemarks(){

let text="<h3>Average Marks</h3>";

for(let s of students){

let avg=(s.maths+s.science+s.english)/3;

text+=s.name+" : "+avg.toFixed(2)+"<br>";

}

document.getElementById("output").innerHTML=text;

}

// Average above 80
function avabove80(){

let text="<h3>Above 80 Average</h3>";

for(let s of students){

let avg=(s.maths+s.science+s.english)/3;

if(avg>80){

text+=s.name+" : "+avg.toFixed(2)+"<br>";

}

}

document.getElementById("output").innerHTML=text;

}

// Average below 40
function avbelow40(){

let text="<h3>Failed Students</h3>";

for(let s of students){

let avg=(s.maths+s.science+s.english)/3;

if(avg<40){

text+=s.name+" : "+avg.toFixed(2)+"<br>";

}

}

document.getElementById("output").innerHTML=text;

}

// Total students
function total(){

document.getElementById("output").innerHTML=
"Total Students : "+students.length;

}