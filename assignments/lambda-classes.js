// CODE here for your Lambda Classes

class Person {
    constructor (info) {
        this.name = info.name;
        this.age = info.age;
        this.location = info.location;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}

class Instructor extends Person {
    constructor (info, instructorInfo) {
        super(info);
        this.specialty = instructorInfo.specialty;
        this.favLanguage = instructorInfo.favLanguage;
        this.catchPhrase = instructorInfo.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject){
        return `${student} receives a perfect score on ${subject}`;
    }
}

class Student extends Person {
    constructor (info, studentInfo) {
        super(info);
        this.previousBackground = studentInfo.previousBackground;
        this.className = studentInfo.className;
        this.favSubjects = studentInfo.favSubjects;  
    }
    listsSubject(){
        return `${this.favSubjects}`;
    }
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}

class ProjectManager extends Instructor {
    constructor (info, instructorInfo, pmInfo) {
        super(info, instructorInfo);
        this.gradClassName = pmInfo.gradClassName;
        this.favInstructor = pmInfo.favInstructor;
        // this.channel = pmInfo.channel;
    }
    standup(slackChannel){
        return `${this.name} announces to ${slackChannel}, @${slackChannel} standy times!`
    }
}

var newPerson = new Person({name: 'Ayomide', age: 24, location: 'Ikeja'});
var newInstructor = new Instructor(
    {name: 'Ryan', age: 28, location: 'San Frasisco'},
    {speciality: "redux", favLanguage: "JavaScript, Python and Ruby", catchPhrase: "Don't forget the homies!!!"});
var newStudent = new Student ({name: "jones", age: 24, location: "London"}, {previousBackground: "logistics", className: "webeu3", favSubjects: ["python", "html", "javaScript", "c#"]});
var pm = new ProjectManager({name: "jones", age: 24, location: "London"},{previousBackground: "logistics", className: "webeu3", favSubjects: "javaScript"}, {gradClassName:"CS1", favInstructor: "Sean"});