class Person{
    constructor(){
        this.firstname = ''
        this.lastname = ''
        this.age = 0    
    } 
}
class Student{
    constructor(firstname, lastname, age){
        this.firstname = firstname
        this.lastname = lastname
        this.age = age   
    } 
}
const person1= new Person()
person1.firstname= 'John'
person1.lastname= 'Smith'
person1.age = 20
console.log(person1)
const person2= new Person()
person2.firstname= 'Mary'
person2.lastname= 'Smith'
person2.age = 19
console.log(person2)
const person3= new Person()
person3.firstname= 'Smit'
person3.lastname= 'Smith'
person3.age = 22
console.log(person3)

const student1= new Student('John', 'Smith', 20)
console.log(student1)
const student2= new Student('Mary', 'Smith', 19)
console.log(student2)
const student3= new Student('Smit', 'Smith', 22)
console.log(student3)

