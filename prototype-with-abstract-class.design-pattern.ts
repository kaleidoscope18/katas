// Problem : I want to copy an object but I cannot copy its private fields
// also, maybe I don't really know the real class of the object, only the interface it implements
// also, if I know the class, then I need to depend on that class (more dependencies)

// A prototype interface supports cloning
// so the object to be cloned, handles the cloning itself!

// Useful when we don't want to know the concrete classes, only the abstract one

/** Shape is the prototype **/
abstract class Shape {
    private X: number
    private Y: number
    public color: string

    protected constructor(source?: Shape) {
        if (!source) return
        this.X = source?.X
        this.Y = source?.Y
        this.color = source?.color
    }

    abstract clone(): Shape
}

class Circle extends Shape {
    private _radius: number
    set radius(value: number) {
        this._radius = value;
    }

    constructor(source?: Circle) {
        super(source)
        if (!source) return
        this._radius = source?._radius
    }

    clone(): Shape {
        return new Circle(this);
    }
}

class Rectangle extends Shape {
    private _area: number
    set area(value: number) {
        this._area = value;
    }

    constructor(source?: Rectangle) {
        super(source)
        if (!source) return
        this._area = source?._area
    }

    clone(): Shape {
        return new Rectangle(this);
    }
}

const circle = new Circle()
circle.radius = 5
circle.color = 'white'
const rectangle = new Rectangle()
rectangle.area = 6
rectangle.color = 'black'
const shapes: Shape[] = [circle, rectangle]

// --------

function clientCode() {
    // only depends on Shape abstract class, and not the actual classes
    const shapesCopy = new Array<Shape>()

    shapesCopy.push(...shapes.map(shape => shape.clone()))

    console.log(JSON.stringify(shapesCopy))
}
clientCode()