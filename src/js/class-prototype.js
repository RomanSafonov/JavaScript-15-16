//open FireFox, press Shift+F4 and insert this text for testing

// constructor
function Human () {
    this.name = 'John';
    this.lastName = 'Doe';
    this.age = 50;
    this.sex = 'm';
    this.height = 200;
    this.weight = 100;
}

function Worker() {
    this.company = 'CIA';
    this.salary = 200000;
    this.work = function() {
        console.log("I'm spy");
    }
}

function Student() {
    this.university = 'Harvard';
    this.coust = 500000;
    this.study = function() {
        console.log("I'm watching new TV series. My annual payment of study 100 000$");
    }
}

Worker.prototype = new Human();
Student.prototype = new Human();
var worker = [];
var student = [];
var nams = ['Adam', 'Bob', 'Cap', 'Din', ];

for (var i = 0; i < 4; i++) {
    worker[i] = new Worker;
    student[i] = new Student;
    worker[i].name = nams[i];
    student[i].age = 18;
    student[i].height = 180;
    student[i].weight = 50;
}
var strW = "Worker:" + '\n';
var strS = "Student:" + '\n';
for (key in worker[0]) {
    strW +=  key + ' = ' + worker[0][key] + '\n';
}
key = null;
for (key in student[2]) {
    strS +=  key + ' = ' + student[2][key] + '\n';
}
strW;
/*
 Worker:
 company = CIA
 salary = 200000
 work = function () {
 console.log("I'm spy");
 }
 name = Adam
 lastName = Doe
 age = 50
 sex = m
 height = 200
 weight = 100

 */
strS;

/*
 Student:
 university = Harvard
 coust = 500000
 study = function () {
 console.log("I'm watching new TV series. My annual payment of study 100 000$");
 }
 age = 18
 height = 180
 weight = 50
 name = John
 lastName = Doe
 sex = m

 */