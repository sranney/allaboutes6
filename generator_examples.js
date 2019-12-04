function* genFunc(x,y,z) {
    yield x;
    yield y;
    yield z;
}

const genObj1 = genFunc(1,2,3);
const genObj2 = genFunc('x','y','z');
//these refer to two different instances of the same generator function - they point to two different iterator instances of the same generator function
genFunc().next()//this will always yield {value:'a',done:false} for this genFunc because calling genFunc creates a new instance of a generator object iterator for this generator function

//three ways to iterate over a generator
//notice that in none of these strategies is it required that you create a stored instance of a generator object - you can call the generator itself

//for-of loop
for (const y of genFunc(1,2,3)) {
    console.log(y);
}//logs: 1;2;3;

//destructuring - this is pretty cool
const [a,b] = genFunc('a','b','c');
//a = 'a'; b = 'b'

//via spread operator
console.log(Math.max(...genFunc(1,2,3)));//logs 3


//this generator applies the return statement - this closes the iterator instance 
function* returner() {
    yield 'a';
    return 'b';
    yield 'c';
}

for (const x of returner()) {
    console.log(x)
}
//this acts different then maybe expected
//it only logs 'a' and then undefined - this is because consumers do not consider values inside of objects returned from generators where done is true (known as done object)

const returnedObj = returner();
returnedObj.next();//{value: 'a', done: false}
returnedObj.next();//{value: 'b', done: true} => notice that this is different than above, we are getting a value of 'b', in consumers of iterables, done objects are ignored
returnedObj.next();//{value: undefined, done: true} => although there was more in the generator function, that is ignored

//same thing will happen below - only 'a' will be in the resulting array
[...returner()]//['a']


//yield only works when statically inside the generator method
function* genWorks() {
    for (let i = 0; i < 5 ; i++){
        yield i;//works
    }
    [1,2,3].forEach(i=>yield i)//doesn't work 
}
//guess why? i=>yield i is not a generator function, yield is only allowed inside of generators
//this actually makes it easier to implement and is more compatable with event loops (async code)

//yield* demonstrations
//let's say that we have two generators - one which among other things, calls another generator function
function* foo() {
    yield 'a';
    yield 'b';
}

function* bar() {
    yield 1;
    foo();//does this do anything?
    yield 2;
}
//nope - foo returns an object, but nothing is done with it

function* bar2() {
    yield 1;
    yield foo();//what about this?
    yield 2;
}
//nope - this time the generator object that is created from the generator function call is returned, but when iterating over a generator, this certainly isn't what is wanted

//so can we and if so how do we iterate over the returning generator object that is returned from calling a different generator function?
//that's what yield* is for - it iterates over the values that are returned from another function's generator object

//let's see it
function* bar3() {
    yield 1;
    yield* foo();//this works!
    yield 2;
}

//but how does this work? does it just do it all at once implicitly? or does it do it one at a time?
const bar3Obj = bar3()
bar3Obj.next()// returns {value: 1, done: false}
bar3Obj.next()//returns {value: 'a', done: false}
bar3Obj.next()//returns {value: 'b', done: false}
bar3Obj.next()//returns {value: 2, done: false}
bar3Obj.next()//returns {value: undefined, done: true}
//so we can see that the execution hangs on the yield* line until all the iterable's values are iterated over one at a time
//everything else works the same way
[...bar3()]//this returns [1,'a','b',2], just as if all of those values were in one generator function at separate yield statements


//so we can consider yield* in a different format
function* bar4() {
    yield 1;
    for (const ltr of foo()) {//yield* is equivalent to this format
        yield ltr;
    }
    yield 2;
}
[...bar4()]//this returns [1,'a','b',2]

//as we saw earlier, when simply yielding foo with yield, it returns a generator object. we know that a generator object is both an iterable and an iterator
//there are a lot of other things that are iterable in ES6 such as arrays, maps, sets

function* bar5() {//you can use yield* to iterate over other iterables
    yield 1;
    yield* new Set(['a','b']);
    yield 2;
}
[...bar5()]//returns [1,'a','b',2] - Rauschmayer states that the operand of yield* doesn't have to be a generator object, it can be any iterable

//because we can construct new instances of things like sets and other generators as shown above, does it matter where that instance is created?
//nope, we can rewrite a few of the functions from above passing stuff in
//but it is pretty cool that we can have that information saved inside of generators for us, that they aren't created new each time

function* bar6(genObj) {
    yield 1;
    yield* genObj;
    yield 2;
}
const fooObj = foo();
[...bar6(fooObj)]//[1,'a','b',2]
const set = new Set(['a','b']);
[...bar6(set)]//[1,'a','b',2]

//we saw earlier that generators typically do not consider the value props of done objects (where done is true)
//that is more of a limitation of the construct that is used to iterate over an iterable - yield* considers those values
function* a () {
    yield 2;
    yield 3;
    return `the product of the two numbers is 6`;
}
function* b() {
    const result = yield* a();
    console.log(result);
}
//this is an interesting demonstration of how this works - let's use a construct which doesn't consider values from return statements
[...b()]
//logs the product of the two numbers is 6 - because yield* captures that as part of its iteration over a
//but the value of [...b()] is [2,3] - because ... does not consider the done object's value

//generators greatly facilitate more complicated procedures
//from Exploring ES6
class BinaryTree { 
    constructor(value, left=null, right=null) { 
        this.value = value; 
        this.left = left; 
        this.right = right; 
    }
    /** Prefix iteration */ 
    * [Symbol.iterator]() { //generator method
        yield this.value; //assuming no binary tree here that would need yield* instead of yield
        if (this.left) { //only yields if there is a truthy left
            yield* this.left; 
            // Short for: yield* this.left[Symbol.iterator]()
            //because the first thing that this does is yield the value at the current node, and then yields over its branches,
            //we get a top down order - top->left, right
        } 
        if (this.right) { 
            yield* this.right; 
        } 
    }
}

const tree = new BinaryTree(
    1,//value
    new BinaryTree(//creates left
        2,//left-value
        new BinaryTree(//creates left-left
            3,//left-left-value
            new BinaryTree(//creates left-left-left
                4//left-left-left-value
            ),
            new BinaryTree(//creates left-left-right
                [5,5.1,5.2,5.3]
            )
        ),
        new BinaryTree(//creates left-right
            6
        )
    ),
    new BinaryTree(//creates right
        7
    )
);

//shorthand example
[...tree]//returns [1,2,3,4,[5,5.1,5.2,5.3],6,7]
//there is no next method here, just an iterable created from having the * [Symbol.iterator]() method - remember all iterators look for this
//but we can walk through a bit of this
//remember that yield* iterates over the entire iterable before continuing on to the next yield statement in the containing generator
//this means that it would traverse down all the left nodes after returning the current node, and then traverse down all the right nodes, returning one at a time
//notice that yield* doesn't do anything but iterate over the first level of iterable - it won't iterate over the [5,5.1,5.2,5.3] array

//another example from hacks.mozilla.org - https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/
function* fibs() {
    var a = 0;
    var b = 1;
    while(true) {
        [a,b] = [b,a+b];
        yield a;
    }
}
//this example is a generator function which creates an indefinite number of yields because of the while loop that is always true that wraps the yield statement
//with destructuring occurring before the yield, and b always being assigned the value of a+b, b will continue to be the addition of the last two numbers in the sequence
//array destructuring on the fibs() works because what is created from fibs() is an iterable - array destructuring works on any iterable
const [one, two, three, four, five] = fibs();
//this calls the iterator for fibs five times, storing the current values for this instance of fibs in each iteration
//one = 1; two=1; three=2; four=3; five=5

//this example creates a generator function which creates a certain number num of yields
//with destructuring assignment, we can see that we are creating the fibonacci sequence
[...fibs(5)]//creates the first five items of a fibonacci sequence [1,1,2,3,5]

//recursively calling a generator inside itself
function* conditionalRecur(x) {
    if(x<10) {
        yield x;
    } else {
        yield x;
        yield* conditionalRecur(x - 1);
    }
}

Array.from(conditionalRecur(15),x=>x+3)//Array.from(conditionalRecur(15),x=>x+3)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/************************************************Generators as Observers**********************************************************/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//we need to understand that next() is asymmetric for this next part
//we can pass data into a generator function with the next method, but by calling next with some data, because next is asymmetric, 
//we cannot expect that what we get returned from next() in the {value,done} object will be related to what we have input
//in fact what we get back from next() is related only to the yield statement that pauses the execution
//internally to the generator function, where next() is called with data and is paused at a certain yield statement 
//the data passed into next is what the yield statement is converted to
//lets look at an example
function* observer(){
    console.log(yield);
    console.log(yield);
}
const observerObj = observer();

const obsObj = observer();
obsObj.next('a');//this first input is ignored
//THE FIRST INVOCATION OF NEXT() IS ONLY TO START THE OBSERVER - INPUT IS IGNORED
//the first call to next() only gets you inside of the body of the function and to the first yield
obsObj.next('b');//logs 'b' returns {value: undefined, done: false} - yield has no operand to return as a value, so it is undefined
obsObj.next('c');//logs 'c' returns {value: undefined, done: false} - yield has no operand to return as a value, so it is undefined

//yield evaluates to whatever is passed into the next function invocations after the first instance and only when yield doesn't already have an operand

//yield* also passes input from next into the generator that is called

function* callee() {
    console.log(`callee: ${yield}`);
}

function* caller() {
    while(true) {
        yield* callee();
    }
}

const called = caller();
called.next();//starts generator
called.next(123);//logs 'callee: 123'
called.next('hello');//logs 'callee: hello'

//yield binds loosely
//yield a + b + c; is NOT the same as (yield a) + b + c; but is the same as yield (a + b + c);

//two other functions - return and throw
//return(x) executes return x at the location of the next yield

function* genFunc1() { 
    try { 
        console.log('Started'); 
        yield; // (A) 
    } finally { 
        console.log('Exiting'); 
    } 
}

//try {} finally {} interacts specially with return(). if return is called immediately after the first invocation of next(), then return() runs through the finally block executing each line
//it doesn't do this if called first
//it also doesn't call the rest of the block of a generator function that doesn't have the try...finally block

//because return() interacts specially with try...finally allowing for further executions, yield can be placed in the finally block, allowing further iterations
function* finallyGen() {
    try {
        console.log('started');
        yield 5;
        yield 6;
        yield 7;
    } finally {
        yield 1;
        yield 2;
        yield 3;
    }
}

const gettingThere = finallyGen();
gettingThere.next();//starts the generator - gets us to the yield {done: false, value: 5}
gettingThere.return();//switches to the finally block - gets us {done: false, value: 1} - doesn't close generator!!

//throw()
//throw() throws an exception at the location of the yield that led to the last suspension of the generator.



//some more examples of implementing generators
//copy the first n elements of an iterable
function* head(n,iterable) {
    for (const el of iterable) {
        if(n<=0) return;//close the generator's iterable
        n--;
        yield el;
    }
}

//copy the last n elements of an iterable
function* tail(n,iterable) {
    let count = 0;
    while(count < n) {
        yield iterable[iterable.length - (count+1)];
        count++;
    }
}

//generalized map function - doesn't just have to be on arrays!
function* map(iterable, mapFunc) {
    for (const el of iterable) {
        yield mapFunc(el);
    }
}

//generalized filter function - doesn't just have to be on arrays!
function* filter(iterable, filterFunc) {
    for (const x of iterable) {
        if(filterFunc(x)) {
            yield x;
        }
    }
}