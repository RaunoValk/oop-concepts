class Student{
    constructor(name, finished){
        this.name = name;
        this.finished = false;
    } 
}
/*
const names =['John' ,  'Mary', 'Denis'] 
const students =[] 

names.forEach(name =>{
        students.push(new Student(name))
} )
console.log(students)
*/

const student1 = new Student('John')
const student2 = new Student('Mary')
student2.finished = true
console.log(student1)
console.log(student2)   

