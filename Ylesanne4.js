class Shape{
    #color
    constructor(color){
        this.#color = color
    }
    setColor(color){
        this.#color = color
    } 
    getColor(){
        return this.#color
    } 
    getArea(){
        return null
    } 
}

class Circle extends Shape {
    #radius
    constructor(color, radius){
        super(color)
        this.#radius = radius
    } 

    getArea(){
        return Math.PI* Math.pow(this.#radius, 2)
    } 
    print(){
        return `Circle (r:{${ this.#radius }} , color:{${ this.getColor() }})  `
    } 
} 
class Square extends Shape{
    #side
    constructor(color, side){
        super(color)
        this.#side = side
    } 
    getArea(){
        return this.#side * this.#side
    } 
    print(){
        return `Square (a:{${ this.#side }} , color:{${ this.getColor() }}) `
    } 
} 
class Rectangle extends Shape{
    #length
    #width
    constructor(color, length, width){
        super(color)
        this.#length = length
        this.#width = width
    } 
    getArea(){
        return this.#length * this.#width
    } 
    print(){
        return `Rectangle (w:{${this.#width}} , l:{${ this.#length}},  color:{${ this.getColor()}})`
    } 
}

class Paint{
    constructor(){
        this.shapes=[]
        }  
        addShape(shape){
            this.shapes.push(shape)
        } 
        getShapes(){
            return this.shapes
        }
        calculateTotalArea(){
          this.totalArea = 0
          this.shapes.forEach(shape =>{
            this.totalArea += shape.getArea()
          } )
          return this.totalArea
        }  
        getCircles(){
            this.circles=[]
            this.circles = this.shapes.filter(shape => shape.constructor.name == 'Circle')
            return this.circles
        }
        getSquares(){
            this.squares=[]
            this.squares = this.shapes.filter(shape => shape.constructor.name == 'Square')
            return this.squares
        } 
        getRectangles(){
            this.rectangles=[]
            this.rectangles = this.shapes.filter(shape => shape.constructor.name == 'Rectangle')
            return this.rectangles
        } 
} 

const shape1 = new Shape('red')
console.log('shape color', shape1.getColor())
console.log('shape area' , shape1.getArea())

const circle1 = new Circle('blue', 5)
console.log(circle1.print())
console.log('circle color', circle1.getColor())
console.log('circle area' , circle1.getArea())

const circle2 = new Circle('blue', 8)
console.log(circle2.print())
console.log('circle color', circle2.getColor())
console.log('circle area' , circle2.getArea())

const square1 = new Square('blue', 10)
console.log(square1.print())
console.log('square color', square1.getColor())
console.log('square area' , square1.getArea())

const square2 = new Square('blue', 5)
console.log(square2.print())
console.log('square color', square2.getColor())
console.log('square area' , square2.getArea())

const rectangle1 = new Rectangle('green', 5, 10)
console.log(rectangle1.print())
console.log('rectangle color', rectangle1.getColor())
console.log('rectangle area' , rectangle1.getArea())

const rectangle2 = new Rectangle('green', 7, 12)
console.log(rectangle2.print())
console.log('rectangle color', rectangle2.getColor())
console.log('rectangle area' , rectangle2.getArea())


const paint = new Paint()
paint.addShape(circle1)
paint.addShape(square1)
paint.addShape(rectangle1)
paint.addShape(circle2)
paint.addShape(square2)
paint.addShape(rectangle2)



console.log(paint.getShapes())
console.log(paint.calculateTotalArea())
console.log(paint.getCircles())
paint.getCircles().forEach(shape => console.log(shape.print()))
paint.getSquares().forEach(shape => console.log(shape.print()))
paint.getRectangles().forEach(shape => console.log(shape.print()))