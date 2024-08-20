function detect(val: number | string){
    if(typeof val === "string"){
        val.toLowerCase()
    }
}


function provideId(id : string | null){
    if(!id){
        console.log(id)
        return
    }
    id.toLowerCase()
}




type Fish ={
    swim: () => void
}

type Bird = {
    fly: () => void
}

function getType1(pet: Fish | Bird) : pet is Fish{
    return (pet as Fish).swim !== undefined
}

// If the Fish and Bird are classes and initialize with keyword new then we can use instanceof

// function getType2(pet: Fish | Bird) : string{
//     if(pet instanceof Fish){
//         return "Fish"
//     }else{
//         return "Bird"
//     }
// }


type Square = {
    kind : "Square",
    side : number
}

type Circle = {
    kind : "Circle",
    radius: number
}

type Rectangle = {
    kind: "Rectangle"
    length: number,
    width: number
}

type Shape = Square | Circle | Rectangle

function getShape(shape:Shape){
    if(shape.kind === "Square"){
        return shape.side * shape.side
    }else if(shape.kind === "Rectangle"){
        return shape.length * shape.width
    }
    return  Math.PI * shape.radius ** 2
}

function getArea(shape: Shape){
    switch(shape.kind){
        case "Circle":
            return Math.PI * shape.radius ** 2
        case "Square":
            return shape.side * shape.side
        case "Rectangle":
            return shape.length * shape.width
        default:
            const _defaultShape : never = shape
            return _defaultShape
    }
}