class Person{
    constructor(person_att){
        this.name = person_att.name;
        this.age = person_att.age;
        this.location = person_att.location;
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}.`
    }
};

class Instructor extends Person{
    constructor(instructor_att){
        super(instructor_att);
        this.specialty = instructor_att.specialty;
        this.favLanguage = instructor_att.favLanguage;
        this.catchPhrase = instructor_att.catchPhrase;
    }
    demo(){
        return `Today we are learning about ${this.specialty}.`;
    }
    grade(){
        return `${this.name} recieves a perfect score on ${this.specialty}`;
    }
}

class Student extends Person{
    constructor(student_att){
        super(student_att);
        this.previousBackground = student_att.previousBackground;
        this.className = student_att.className;
        this.favSubjects = student_att.favSubjects;
    }
    listsSubjects(){
        this.favSubjects.forEach(element => {
            for(let i = 0; i < element.length; i++){
                return element[i];
            }
        });
        return this.favSubjects;
    }
    PRAssignments(){
        return `${this.name} has submitted a PR for ${this.favSubjects[0]}.`;
    }
    sprint(){
      return `${this.name} has begun sprint challenge on ${this.favSubjects[1]}`;
    }
}

class Project_Manager extends Instructor{
    constructor(project_att){
        super(project_att);
        this.gradClassName = project_att.gradClassName;
        this.favInstructor = project_att.favInstructor;
    }
    standUp(){
        return `${this.name} announces to WEB23, @WEB23 standby times!`;
    }
    debugCode(){
        return `${this.name} debugs ${dean.name}'s code on ${dean.favSubjects[2]}.`;
    }
};

// The Instructors

const fred = new Instructor({
  name: 'Fred',
  location: 'Mississippi',
  age: 37,
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});

const stan = new Instructor({
  name: 'Stan',
  location: 'Washington',
  age: 45,
  favLanguage: 'C++',
  specialty: 'Back-end',
  catchPhrase: `Let me sleep please...`
});

// The Students

const dean = new Student({
  name: 'Dean',
  location: 'Texas',
  age: 19,
  previousBackground: 'English Major',
  className: 'Web100',
  favSubjects: ['Writing', 'Reading', 'Creative writing']
});

const mike = new Student({
  name: 'Mike',
  location: 'Colorado',
  age: 21,
  previousBackground: 'BioChem Major',
  className: 'Web102',
  favSubjects: ['Chemistry', 'Math', 'Robotics']
});

const sofia = new Student({
  name: 'Sofia',
  location: 'Minnisota',
  age: 25,
  previousBackground: 'Mechanical Engineer Major',
  className: 'Web106',
  favSubjects: ['Robotics', 'Calculus', 'Statistics']
});

// Project Managers 

const roger = new Project_Manager({
  name: 'Roger',
  location: 'Quebec',
  age: 30,
  gradClassName: 'CS12',
  favInstructor: 'Mitchel',
});

const miguel = new Project_Manager({
  name: 'Miguel',
  location: 'Colorado',
  age: 40,
  gradClassName: 'IOS2',
  favInstructor: 'Daniel',
});

console.log(fred.speak()); //test

console.log(fred.demo());
console.log(stan.grade());

console.log(dean.listsSubjects());
console.log(mike.sprint());
console.log(sofia.PRAssignments());

console.log(miguel.standUp());
console.log(roger.debugCode());
