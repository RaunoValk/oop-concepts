class Student{
    #name
    #id
    #status
    
    constructor(name, id){
        this.#name = name
        this.#id = id
        this.#status = 'Active'
    
}

getId(){
    return this.#id
}  

getName(){
    return this.#name
} 

setName(name){
    this.#name = name
} 
getStatus(){
    return this.#status
}
setStatus(status){
    const statuses = ['Active', 'Expelled', 'Finished', 'Inactive']
    if(statuses.includes(status)){
        this.#status=status
    } 
  } 
}

const student = new Student("John", 1)
console.log(student)
console.log(student.getName())
console.log(student.getId())
student.setName('John Doe')
console.log(student.getName())
console.log(student.getStatus())
student.setStatus('Vacation')
console.log(student.getStatus())
student.setStatus('Inactive')
console.log(student.getStatus())


/*
    getName(){
        return this.#name
    }

    getFinished(){
        this.#finished = finished
    } 

    setFinished(finished){
        this.#finished = finished
    } 
} 

const student = new Student("John")
student.setFinished(true)
console.log(student)
console.log(student.getName())
*/
