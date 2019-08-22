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
        return `Today we are learning about ${this.specialty}.`
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
        this.favSubjects.array.forEach(element => {
            for(let i = 0; i < array.length; i++){
                return array[i];
            }
        });
        return this.favSubjects;
    }
    PRAssignments(){
        return `${this.name} has submitted a PR for ${this.specialty}.`
    }
}

class Project_Manager extends Instructor{
    constructor(project_att){
        super(project_att);
        this.gradClassName = project_att.gradClassName;
        this.favInstructor = project_att.favInstructor;
    }
    standUp(){
        return `${this.name} announces to WEB23, @WEB23 standby times!`
    }
    debugCode(){
        return `${this.name} debugs ${student.name}'s code on ${student.favSubjects}.`;
    }
}

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

const dean = new Student({
  name: 'Dean',
  location: 'Texas',
  age: 19,
  previousBackground: 'English Major',
  className: 'Web100',
  favSubjects: ['Writing', 'Reading', 'Creative writing']
});

console.log(fred.catchPhrase);
console.log(stan.demo());

console.log(dean.name);
