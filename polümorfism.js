class Circle{
    corners(){
        console.log('Circle has no corners')
    } 
    sides(){
        console.log('Circle has one side')
    }} 

class Rectangle{
    corners(){
        console.log('Rectangle has 4 corners')
    } 
    sides(){
        console.log('Rectangle has 4 sides')
    }}

    const cornersTest=(shape) =>{
        shape.corners()
    } 
    const sidesTest=(shape) =>{
            shape.sides()
    } 
    const shape1 = new Circle()
    const shape2 = new Rectangle()
    const sides1 = new Circle()
    const sides2 = new Rectangle()
    
    cornersTest(shape1)
    cornersTest(shape2)
    sidesTest(sides1)
    sidesTest(sides2)
    
