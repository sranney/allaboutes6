class Parent {
	constructor() {
        //…
    }
    //…
}
class Child extends Parent{
    //…
}
const childInstance = new Child()
instanceof childInstance Child;//true
instanceof childInstance Parent;//true
typeof Parent;//function – the result of a class definition is just a function

//Static properties
class Parent {
    //…
}
Parent.dataProp = 123;//same instance is returned every time
//You can also create a static getter method
class Parent {
//…
	static get dataProp() {
		return 123;//if this is a class instance or something else, it is created new every time this method is called
    }
}

//Getters and Setters
class Parent {
	constructor() {
		this.prop = ‘’
    }
	get prop() {
		return this.prop;
	}
    set prop(value) {
        this.prop = value;
    }
}
//Now we have a system in a class that operates a lot like object literals
const newInstance = new Parent();
newInstance.prop;//calls the get method prop() which returns the value of this.prop from within newInstance – this returns ‘’
newInstance.prop = ‘hello’//calls the setter method prop(value) passing down ‘hello’ as value into this function
newInstance.prop;//calls the get method prop() again, but this time because we just set prop as ‘hello’ through the setter method this returns ‘hello’

//we can create iterable classes with the use of generators and symbol.iterator
class IterableClass {
	constructor(…args) {
		this.args = args;
    }
    * [Symbol.iterator]() {//creates an iterable by the [Symbol.iterator] and generates a method of being able to traverse via the generator method definition
        for (const arg of this.args) {
            yield arg;
        }
    }
}

for (const x of new IterableClass('hello','goodbye') {
	console.log(x);
}


//All methods, properties inherited, from a class are available via this.methodName, etc. from within a subclass
//And the values are as expected from the class
class Point { 
    constructor(x, y) { 
        this.x = x; 
        this.y = y; 
    } 
    toString() { 
        return `(${this.x}, ${this.y})`; 
    } 
}
class ColorPoint extends Point {
	constructor(x,y,color) {
		super(x,y);//this calls the super constructor and ends up setting this.x and this.y
        this.color = color;
    }
    toString() {
        return super.toString() + ‘ in ‘ + this.color;
    //this calls the super class’s toString method returning a string of ‘(x,y)’ with x and y evaluated, then it attaches to that ‘in this.color’
    }
}
const cp = new ColorPoint(25,8,’green’);//this calls both ColorPoint and Points constructors with how ColorPoint’s constructor is set up, so we get in cp, this.x = 25, this.y = 8, this.color = ‘green’
cp.toString()//this calls the super class (Point)’s toString method, returning back a coordinate set of ‘(25,8)’ which has appended to it, ‘ in green’

//differences between two types of classes - base and derived

//base class
class ClassOne {
    constructor() {
        this.state='hello';
    }
}
//derived class
class ClassTwo extends ClassOne {
    constructor() {
        super();
        this.somethingElse = 'how are you?'
    }
}
//derived class extended from another derived class extended from a base class
class ClassThree extends ClassTwo {
    constructor () {
        super()
        this.oneMoreThing = 'goodbye'
    }
    method(){
        console.log(this.state);//from ClassOne
        console.log(this.somethingElse);//from ClassTwo
        console.log(this.oneMoreThing);//from ClassThree
    }
}
new ClassThree() instanceof ClassThree; //true
new ClassThree() instanceof ClassTwo;//true
new ClassThree() instanceof ClassOne; //true

//extending from a built-in constructor
//from Error
class MyError extends Error {
    constructor() {
        super();
        this.description = 'spencer\'s error'; 
    }
}
throw new MyError(); //logs error: spencer’s error

//from Array
class Stack extends Array {
    get top() {
        return this[this.length - 1];
    }
}
var stack = new Stack(); 
stack.push('world'); 
stack.push('hello'); 
console.log(stack.top); // hello 
console.log(stack.length); // 2

//Private data via constructor environments - closure pattern
class Countdown {
    constructor (action, counter) {
        Object.assign(this,{
            dec() {
                if(counter > 0) {
                    counter--;
                } else {
                    action();
                }
            }
        })
    }
}
const cd = new Countdown(()=>console.log('I\'m finished!'),5);
//notice that counter and action are only passed into the constructor and passed into dec
//they are not stored as data properties on the class - this operates by closure context reference
//you're not able to retrieve the values of those properties directly - only through calling dec()

//Private data stored in WeakMap
const _counter = new WeakMap(); 
const _action = new WeakMap(); 

class Countdown { 
    constructor(counter, action) { 
        const set = WeakMap.prototype.set;
        const get = WeakMap.prototype.get;
        set.call(_counter,this,counter);
        set.call(_action,this,action);
    } 
    dec() { 
        let counter = _counter.get(this); 
        if (counter < 1) return; 
        counter--; 
        _counter.set(this, counter); 
        if (counter === 0) {
            _action.get(this)();
        }
    }
}