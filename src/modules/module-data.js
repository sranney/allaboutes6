export default [
    {
        category: 'background',
        sections: [
            {
                title: 'Goals of ES6',
                key: 0,
                subsections: [
                    [
                        {
                            type: 'paragraph',
                            content: 'some text on goals of es6 - 1st section',
                            key: '000',
                        },
                        {
                            type: 'paragraph',
                            content: 'some text on goals of es6 - 1st section',
                            key: '001',
                        },
                        {
                            type: 'paragraph',
                            content: 'some text on goals of es6 - 1st section',
                            key: '002',
                        },
                    ],
                    [
                        {
                            type: 'paragraph',
                            content: 'some text on goals of es6 - 2nd section',
                            key: '000',
                        },
                        {
                            type: 'paragraph',
                            content: 'some text on goals of es6 - 2nd section',
                            key: '001',
                        },
                        {
                            type: 'paragraph',
                            content: 'some text on goals of es6 - 2nd section',
                            key: '002',
                        },
                    ],
                    [
                        {
                            type: 'paragraph',
                            content: 'some text on goals of es6 - 3rd section',
                            key: '000',
                        },
                        {
                            type: 'paragraph',
                            content: 'some text on goals of es6 - 3rd section',
                            key: '001',
                        },
                        {
                            type: 'paragraph',
                            content: 'some text on goals of es6 - 3rd section',
                            key: '002',
                        },
                    ],
                ],
            },
            {
                title: 'TC39',
                key: 1,
                subsections: [
                    [
                        {
                            type: 'paragraph',
                            content: 'some text on tc39 - 1st section',
                            key: '000',
                        },
                        {
                            type: 'paragraph',
                            content: 'some text on tc39 - 1st section',
                            key: '001',
                        },
                        {
                            type: 'paragraph',
                            content: 'some text on tc39 - 1st section',
                            key: '002',
                        },
                    ],
                    [
                        {
                            type: 'paragraph',
                            content: 'some text on tc39 - 2nd section',
                            key: '000',
                        },
                        {
                            type: 'paragraph',
                            content: 'some text on tc39 - 2nd section',
                            key: '001',
                        },
                        {
                            type: 'paragraph',
                            content: 'some text on tc39 - 2nd section',
                            key: '002',
                        },
                    ],
                    [
                        {
                            type: 'paragraph',
                            content: 'some text on tc39 - 3rd section',
                            key: '000',
                        },
                        {
                            type: 'paragraph',
                            content: 'some text on tc39 - 3rd section',
                            key: '001',
                        },
                        {
                            type: 'paragraph',
                            content: 'some text on tc39 - 3rd section',
                            key: '002',
                        },
                    ],
                ],
            },
            {
                title: 'Design Process',
                key: 2,
                subsections: [
                    [
                        {
                            type: 'paragraph',
                            content:
                                'some text on design process - 1st section',
                            key: '000',
                        },
                        {
                            type: 'paragraph',
                            content:
                                'some text on design process - 1st section',
                            key: '001',
                        },
                    ],
                ],
            },
            {
                title: "Versioning in JavaScript - Don't Break the Web",
                key: 3,
                subsections: [
                    [
                        {
                            type: 'paragraph',
                            content: 'some text on versioning - 1st section',
                            key: '000',
                        },
                    ],
                ],
            },
            {
                title: 'Going Forward',
                key: 4,
                subsections: [
                    [
                        {
                            type: 'paragraph',
                            content: 'some text on going forward - 1st section',
                            key: '000',
                        },
                    ],
                ],
            },
        ],
    },
    {
        category: 'destructuring',
        sections: [
            {
                title: 'What is it?',
                key: 0,
                subsections: [
                    [
                        {
                            type: 'paragraph',
                            content:
                                '"Destructuring is a convenient way of extracting multiple values from data stored in (possibly nested) objects and Arrays. It can be used in locations that receive data (such as the left-hand side of an assignment). How to extract the values is specified via patterns..."',
                            key: '000',
                        },
                        {
                            type: 'paragraph',
                            content: '-- Dr. Axel Rauschmayer in Exploring ES6',
                            key: '001',
                        },
                    ],
                ],
            },
            {
                title: 'Abstraction',
                key: 1,
                subsections: [
                    [
                        {
                            type: 'section title',
                            content: 'What patterns?',
                            key: '000',
                        },
                        {
                            type: 'basic example',
                            content: 'const [x,y] = [1,2];',
                            key: '001',
                        },
                        {
                            type: 'paragraph',
                            content:
                                "First, let's consider what we need in destructuring.",
                            key: '002',
                        },
                        {
                            type: 'paragraph',
                            content:
                                'We need data to be destructured, and we need a way to instruct what we want to extract',
                            key: '003',
                        },
                        {
                            type: 'keyword',
                            content: 'Destructuring Resource',
                            key: '004',
                        },
                        {
                            type: 'keyword paragraph',
                            content:
                                'The destructuring resource is the data that we extract from. It is the data to be destructured from',
                            key: '005',
                        },
                        {
                            type: 'keyword',
                            content: 'Destructuring Target',
                            key: '006',
                        },
                        {
                            type: 'keyword paragraph',
                            content:
                                'The instructions that we give for how to destructure what we want to extract from the resource. The patterns that we use to extract the data into new variables',
                            key: '007',
                        },
                    ],
                    [
                        {
                            type: 'section title',
                            content: 'Destructuring Target Patterns',
                            key: '000',
                        },
                        {
                            type: 'paragraph',
                            content:
                                'There are three patterns that you can use in destructuring. Their usage depends somewhat on what your destructuring resource is.',
                            key: '001',
                        },
                        {
                            type: 'keyword',
                            content: 'Object pattern',
                            key: '002',
                        },
                        {
                            type: 'keyword paragraph',
                            content:
                                '{«pattern»}\n{«named variable»: «pattern», «named variable»: «pattern» }',
                            key: '003',
                        },
                        {
                            type: 'keyword paragraph',
                            content:
                                'Can be used on destructuring resources that are objects. This includes Arrays. As you can see, the object pattern uses the object {} brackets. Additionally, you must destructure variables based on named values in the destructuring resource object.',
                            key: '004',
                        },
                        {
                            type: 'keyword',
                            content: 'Array pattern',
                            key: '005',
                        },
                        {
                            type: 'keyword paragraph',
                            content: '[«pattern», «pattern»]',
                            key: '006',
                        },
                        {
                            type: 'keyword paragraph',
                            content:
                                'Can be used on destructuring resources that are iterable (for an understanding of what an iterable is, see the section iterables). Arrays, Sets, Maps, Generators, the list goes on. You use the array [] brackets. You can name the destructured values whatever you want, thus the «pattern»... think about it, what would be a required name for the variable?',
                            key: '007',
                        },
                        {
                            type: 'keyword',
                            content: 'Assignment Target',
                            key: '008',
                        },
                        {
                            type: 'keyword paragraph',
                            content:
                                'Using object and array patterns, this pattern is when you want to destructure data and store it in an existing variable. An example:',
                            key: '009',
                        },
                        {
                            type: 'code',
                            content: `const array = [];
({one: array[0],two: array[1]} = {one:'hello',two:'world'});`,
                            key: '010',
                        },
                        {
                            type: 'keyword paragraph',
                            content:
                                "here, after doing the assignment target destructuring pattern, array = ['hello','world']",
                            key: '011',
                        },
                    ],
                ],
            },
            {
                title: 'Some basic examples',
                key: 2,
                subsections: [
                    [
                        {
                            type: 'section title',
                            content: 'Some Basic Object Destructuring Examples',
                            key: '000',
                        },
                        {
                            type: 'code',
                            content: `const obj = {x: 'hello',y:'world'};

/*guess the results of the following lines of code*/
const {x,y} = obj;
console.log(x);
console.log(y);

const {x:a} = obj;
console.log(a);
`,
                            key: '001',
                        },
                        {
                            type: 'code results',
                            content: "x = a = 'hello', y = 'world'",
                            key: '003',
                        },
                    ],
                    [
                        {
                            type: 'section title',
                            content: 'Some Basic Array Destructuring Examples',
                            key: '000',
                        },
                        {
                            type: 'code',
                            content: `const array = ['hello','world'];

/*guess the results of the following lines of code*/
const [x,y] = array;
console.log(x);
console.log(y);
const [,world] = array;
console.log(world);
`,
                            key: '001',
                        },
                        {
                            type: 'code results',
                            content: "x = 'hello', y = world = 'world'",
                            key: '003',
                        },
                    ],
                    [
                        {
                            type: 'section title',
                            content: 'Some Review',
                            key: '000',
                        },
                        {
                            type: 'paragraph',
                            content:
                                "Notice that we don't have to destructure everything from an array or an object. We just name what we want.",
                            key: '001',
                        },
                        {
                            type: 'paragraph',
                            content:
                                'We destructure using the Object pattern by naming what we want. We destructure using the Array pattern by the element index, so we can skip elements by using commas.',
                            key: '002',
                        },
                    ],
                    [
                        {
                            type: 'section title',
                            content: 'We just destructure what we want',
                            key: '000',
                        },
                        {
                            type: 'code',
                            content: `
const object = {a: 1, b: 'hello',c: {xyz: 'xyz'}, d: 42};
const {c: {xyz}} = object;
console.log(xyz);

const array = [0,1,2,3,4,'hello'];
const [,,,,prop] = array;
console.log(prop);
`,
                            key: '001',
                        },
                        {
                            type: 'code results',
                            content: "xyz = 'xyz', prop = 'hello'",
                            key: '002',
                        },
                    ],
                ],
            },
            {
                title: 'Default Values',
                key: 3,
                subsections: [
                    [
                        {
                            type: 'section title',
                            content:
                                'What happens if what you are trying to destructure is not present?',
                            key: '000',
                        },
                        {
                            type: 'code',
                            content: `
const object = { one: 'hello' };
const { two } = object;

const array = [ 'hello' ];
const [ , hello ] = array;

/*what are these going to log?*/
console.log( two );
console.log( hello );
`,
                            key: '001',
                        },
                        {
                            type: 'code results',
                            content: 'two = undefined, hello = undefined',
                            key: '002',
                        },
                    ],
                    [
                        {
                            type: 'section title',
                            content:
                                'Is there anything that we can do in this case?',
                            key: '000',
                        },
                        {
                            type: 'paragraph',
                            content:
                                "This is a bad situation if we expect to be able to use some data and it isn't there. It could cause errors!",
                            key: '001',
                        },
                        {
                            type: 'paragraph',
                            content: 'One way around this issue is...',
                            key: '002',
                        },
                        {
                            type: 'keyword',
                            content: 'Default Values',
                            key: '003',
                        },
                        {
                            type: 'paragraph',
                            content:
                                'Default values are values that can be set to the variables in the case that the destructuring pattern used results in a variable having the value of undefined. undefined triggers the default value to be used as the default value',
                            key: '004',
                        },
                        {
                            type: 'paragraph',
                            content: 'Our patterns are updated as follows:',
                            key: '005',
                        },
                        {
                            type: 'paragraph',
                            content: `{«pattern»} AND [«pattern»]`,
                        },
                    ],
                    [
                        {
                            type: 'section title',
                            content: 'So how does this look and work?',
                            key: '000',
                        },
                        {
                            type: 'paragraph',
                            content:
                                "Let's look at the same example as from a few slides back",
                            key: '001',
                        },
                        {
                            type: 'code',
                            content: `
const object = { one: 'hello' };
const { two = 'world' } = object;

const array = [ 'hello' ];
const [ , hello = 3 ] = array;

/*what are these going to log?*/
console.log( two );
console.log( hello );
`,
                            key: '002',
                        },
                        {
                            type: 'code results',
                            content: "two = 'world', hello=3 🎉",
                            key: '003',
                        },
                    ],
                    [
                        {
                            type: 'section title',
                            content:
                                'Which came first, the chicken or the egg?',
                            key: '000',
                        },
                        {
                            type: 'code',
                            content: `
function fun() {
    console.log('hello there!);
    return 5;
}
const obj = {one: 'goodbye'};
const {one = fun()} = obj;
const {two = fun()} = obj;                
`,
                            key: '001',
                        },
                        {
                            type: 'paragraph',
                            content:
                                "Here, we have two different destructuring target patterns. One which we know will return undefined as the value, and thus the default value will be used. And the other which has a matching value in the object resource. How many instances of 'hello, there' should we expect to be destructured?",
                            key: '002',
                        },
                        {
                            type: 'code results',
                            content:
                                "The way that default values work is that they are only retrieved when needed. They are on-demand. This means that, because the first destructuring pattern results in extracting a value from obj, the default value is not accessed. It is only accessed when trying to extract two from obj, which doesn't exist. Ultimately what we get is one = 'goodbye' and two=5. We have 'hello, there' logged once.",
                            key: '003',
                        },
                    ],
                    [
                        {
                            type: 'section title',
                            content: 'A little further clarity',
                            key: '000',
                        },
                        {
                            type: 'paragraph',
                            content:
                                'So we just saw that default values are dynamic, accessed only on demand.',
                            key: '001',
                        },
                        {
                            type: 'paragraph',
                            content:
                                'A good way of looking at this would be to write this in a different way:',
                            key: '002',
                        },
                        {
                            type: 'code',
                            content: `
const fun = () => 5;
const obj = {};
let { one = fun() } = obj;

/* is equivalent to*/

let one;
if ( obj.one === undefined ) {
    one = fun();
} else {
    one = obj.one;
}
`,
                            key: '003',
                        },
                    ],
                    [
                        {
                            type: 'section title',
                            content: "Let's test what we just covered",
                            key: '000',
                        },
                        {
                            type: 'paragraph',
                            content:
                                "We've got a pretty good grasp on how this works now. Let's look at some more complicated examples",
                            key: '001',
                        },
                        {
                            type: 'code',
                            content: `
const [ { prop: x } = { prop: 123 } ] = [];
console.log(x);
const [ { prop: y } = { prop: 123 } ] = [{}];
console.log(y);
`,
                            key: '002',
                        },
                        {
                            type: 'paragraph',
                            content:
                                'The difference is subtle but it makes a big difference',
                            key: '003',
                        },
                        {
                            type: 'code results code',
                            content: `
/*let's break this down*/
const [ { prop: x } = { prop: 123 } ] = [];
/**there is no object in the destructuring resource, so there's nothing to match against the pattern of [{}] in the destructuring target
*this means that the default value should kick in, so now we are dealing with*/
const { prop: x } = { prop: 123 };
/*we are just destructuring prop out, which is matched in the resource
*prop = 123
*we rename prop as x
*so*/ 
console.log(x) /*results in log of 123*/

const [ { prop: y } = { prop: 123 } ] = [ { } ];
/*here, the pattern of [ { } ] is matched in the resource
*so the default value for { } is NOT used
*this boils down to */
const {prop:y} = {};
/*there is nothing to match prop pattern in the resource, so prop = undefined
*renaming prop as y results in y = undefined*/
`,
                            key: '004',
                        },
                    ],
                ],
            },
            {
                title: 'Parameter List Destructuring',
                key: 4,
                subsections: [
                    [
                        {
                            type: 'section title',
                            content: 'A really cool new function feature',
                            key: '000',
                        },
                        {
                            type: 'paragraph',
                            content:
                                "Now, all of this destructuring structure would have been good enough, but TC39 didn't leave it at that. They changed function structure to allow destructuring to be done in function parameters. Everything that we have been going over here so far, and a little more still to come, will work in function parameter destructuring.",
                            key: '001',
                        },
                    ],
                    [
                        {
                            type: 'section title',
                            content: 'Some Basic Examples',
                            key: '000',
                        },
                        {
                            type: 'code',
                            content: `
const func = ({one= 1, two= 2, three= 3}) => one + two + three;
/*what do we expect this to log?*/
console.log(func({one = 5}));//A

const func2 = ([one,two,three]) => one + two + three;
/*what do we expect this to log?*/
console.log(func2([1,2,3]));//B
`,
                            key: '001',
                        },
                        {
                            type: 'code results',
                            content:
                                '10 is logged from line A; 6 is logged from line B',
                            key: '002',
                        },
                    ],
                    [
                        {
                            type: 'section title',
                            content: 'Some more interesting examples',
                            key: '000',
                        },
                        {
                            type: 'code',
                            content: `
const ParamError = () => {
    throw new Error('need to provide parameter with name required!');
};

const func1 = ({one=1,required=ParamError()}) => one + required;

/*what does this log?*/
console.log(func1({one: 5}));//A

/*what does this log?*/
console.log(func1({required: 10}));//B
`,
                            key: '001',
                        },
                        {
                            type: 'code results',
                            content:
                                'line A throws an error because the default value of required, ParamError, is a function which will throw an error when called - required is not provided in this function call, so ParamError is called; line B is 11 because one defaults to 1, so 10 + 1 = 11',
                            key: '002',
                        },
                    ],
                    [
                        {
                            type: 'section title',
                            content:
                                "And, of course, I'm going to tie this back to React",
                            key: '000',
                        },
                        {
                            type: 'paragraph',
                            content:
                                'React is seemingly pushing towards completely function components.',
                            key: '001',
                        },
                        {
                            type: 'paragraph',
                            content:
                                'It is an important best practice to provide default values for props.',
                            key: '002',
                        },
                        {
                            type: 'paragraph',
                            content:
                                'With destructuring and default values, you can do all of this in the parameter list for props',
                            key: '003',
                        },
                        {
                            type: 'code',
                            content: `
const Button = ({color= 'blue', borderColor= 'blue', children= 'Click!'}) => 
    <button color={color} borderColor={borderColor}>{children}</button>;

const ButtonContainer = () => {
    <>
        <Button color='red'/>//A
        <Button borderColor='black'>Hello!</Button>//B
    </>
};
`,
                            key: '004',
                        },
                        {
                            type: 'code results',
                            content:
                                'A is a button that has a red font, blue border and has Click! as the text rendered in it. B is a button that has a blue font, black border and renders the text Hello!',
                            key: '005',
                        },
                    ],
                    [
                        {
                            type: 'section title',
                            content: 'These are just a few examples',
                            key: '000',
                        },
                        {
                            type: 'paragraph',
                            content:
                                "We'll review some additional function parameter destructuring examples in a bit.",
                            key: '001',
                        },
                    ],
                ],
            },
            {
                title: 'Nested Destructuring Patterns',
                key: 5,
                subsections: [
                    [
                        {
                            type: 'image',
                            content: 'https://i.imgflip.com/3ica14.jpg',
                            key: '000',
                        },
                    ],
                    [
                        {
                            type: 'section title',
                            content:
                                'You can go as deep as the data is stored,...',
                            key: '000',
                        },
                        {
                            type: 'paragraph',
                            content:
                                'as long as you structure your destructuring patterns correctly. Remember that you can combine the object and the array destructuring patterns',
                            key: '001',
                        },
                        {
                            type: 'code',
                            content: `
const obj = {
  foo: [
    {
      prop: 'hello'
    }
  ]
};
/*How would you destructure out prop from above?*/
`,
                            key: '002',
                        },
                        {
                            type: 'code results',
                            content: `const {foo: [{prop}]} = obj; /*result: prop = 'hello'*/
`,
                            key: '003',
                        },
                    ],
                    [
                        {
                            type: 'section title',
                            content:
                                'Only your innermost pattern will have a variable created for it',
                            key: '004',
                        },
                        {
                            type: 'code',
                            content: `
const object = {a: 1, b: 'hello',c: {xyz: 'xyz'}, d: 42};
const {c: {xyz}} = object;
console.log(c);/*what is this equal to?*/
console.log(xyz);/*we already saw from earlier that this is 'xyz'*/
`,
                            key: '005',
                        },
                        {
                            type: 'code results',
                            content:
                                "trying to reference c will result in a ReferenceError. we didn't actually create a variable for c, we created a variable for xyz",
                            key: '006',
                        },
                    ],
                    [
                        {
                            type: 'section title',
                            content:
                                'Why is it necessary that only a variable xyz was necessary?',
                            key: '007',
                        },
                        {
                            type: 'paragraph',
                            content:
                                'Remember that the destructuring target is just a pattern to get to the end result of the innermost data to be extracted. It is important that variables are not created along the way in destructuring because if they were, you could only ever use that pattern once, the variables would already be defined.',
                        },
                    ],
                ],
            },
            {
                title:
                    'ES6 Constructs That Allow for Destructuring through Iterations',
                key: 6,
                subsections: [
                    [
                        {
                            type: 'section title',
                            content:
                                'ES6 constructs that allow for destructuring through iteration',
                            key: '000',
                        },
                        {
                            type: 'code',
                            content: `/*for...of loops work on iterables*/
for( const x of [1,2,3] ) {
    console.log(x);
}

/*we can also destructure x if the iterable has elements that are objects or arrays (or other iterables)*/
for (const [a,b] of [[1,2],[3,4]]) {
    console.log(\`\${a}:\`,b);
}
`,
                            key: '001',
                        },
                        {
                            type: 'code results',
                            content: "logged is what is expected: '1:2', '3:4'",
                            key: '002',
                        },
                    ],
                    [
                        {
                            type: 'section title',
                            content: 'Rest operator',
                            key: '000',
                        },
                        {
                            type: 'paragraph',
                            content:
                                'This is one of my favorite constructs of ES6. Super compact, but very flexible and powerful. You can gather all of the remaining elements of an iterable into one variable by simply doing the following:',
                            key: '001',
                        },
                        {
                            type: 'code',
                            content: `
/*basic application of rest operator*/
/*with arrays*/
const [a,...b] = [1,2,3,4];
//b = [2,3,4]
/*enter destructuring - what are two, three and four?*/
const [one,...[,,four]] = [1,2,3,4];
`,
                            key: '002',
                        },
                        {
                            type: 'code results',
                            content: 'four = 4',
                            key: '003',
                        },
                    ],
                    [
                        {
                            type: 'section title',
                            content: "Let's break this down",
                            key: '000',
                        },
                        {
                            type: 'paragraph',
                            content: 'const [a, ...b] = [1,2,3,4]',
                            key: '001',
                        },
                        {
                            type: 'paragraph',
                            content: 'const [a,...[ , , four]] = [1,2,3,4]',
                            key: '002',
                        },
                        {
                            type: 'paragraph',
                            content: 'we know that b = [2,3,4]',
                            key: '003',
                        },
                        {
                            type: 'paragraph',
                            content:
                                'and we know that two = 2, three = 3, four = 4',
                            key: '004',
                        },
                        {
                            type: 'paragraph',
                            content: 'we could do const [ , , four] = b',
                            key: '005',
                        },
                        {
                            type: 'paragraph',
                            content: 'and get the same thing',
                            key: '006',
                        },
                        {
                            type: 'paragraph',
                            content:
                                'so what we are able to do with just the rest operator is destructuring inside of destructuring',
                            key: '007',
                        },
                    ],
                    [
                        {
                            type: 'section title',
                            content: 'Rest Operators in Function Parameters',
                            key: '000',
                        },
                        {
                            type: 'code',
                            content: `
const obj = {key1: 'value1', key2: 'value2', key3: 'value3'};
const obj2 = {key2: 'value2'};
const func = ({key2,...rest}) => {
    /*what is rest equal to?*/
    console.log(rest);
}
func(obj);//A
func(obj2);//B
`,
                            key: '001',
                        },
                        {
                            type: 'code results',
                            content: `A: {key1: 'value1', key3: 'value3'}; B: {}`,
                            key: '002',
                        },
                    ],
                    [
                        {
                            type: 'section title',
                            content:
                                'Some practical applications of destructuring with the rest operator',
                            key: '000',
                        },
                        {
                            type: 'code',
                            content: `
/*props.btnStyles passed from parent component to BtnContainer Component*/
/* [
    {key: 'value',color: 'red', borderColor: 'blue', fontSize: '24px', content: 'click'},
    {key: 'value2',color: 'black', borderColor: 'black', fontSize: '32px', content: 'press'}
]*/

const StyledBtn = styled\`
    color: \${({color = 'black'}) => color};
    border: 1px solid \${({borderColor = 'black'}) => borderColor};
    font-size: \$(({fontSize = '16px'}) => fontSize};
\`;

const BtnContainer = ({btnStyles}) => {
    return (
        <div>
            {
                btnStyles.map({key,content,...styles} => 
                    <StyledBtn key={key} {...styles}>{content}</StyledBtn>)
            }
        </div>
    )
}
`,
                            key: '001',
                        },
                    ],
                ],
            },
            {
                title: 'Destructuring reversed',
                key: 8,
                subsections: [
                    [
                        {
                            type: 'section title',
                            content:
                                'We can use destructuring patterns to also set the value of a variable',
                            key: '000',
                        },
                        {
                            type: 'paragraph',
                            content:
                                'So far we have only covered how to take stuff out of an object',
                            key: '001',
                        },
                        {
                            type: 'paragraph',
                            content:
                                "We can also use these patterns to set data data with existing variables. Let's look at an example",
                            key: '002',
                        },
                        {
                            type: 'code',
                            content: `
const obj = { key1: 'value1', key2:'value2' };
const array = [obj];
/*what's the value of array?*/
`,
                            key: '003',
                        },
                        {
                            type: 'code results',
                            content: `array = [ { key: 'value1', key2: 'value2' } ]`,
                            key: '004',
                        },
                    ],
                    [
                        {
                            type: 'section title',
                            content: 'How did that work?',
                            key: '000',
                        },
                        {
                            type: 'paragraph',
                            content: `Let's look at this in more of the abstract`,
                            key: '001',
                        },
                        {
                            type: 'code',
                            content: `
const obj = { key1: 'value1', key2:'value2' };
const array = [obj];
/*so first, array is of an array pattern -*/
*
*[ «pattern» ]

*«pattern» is the inner pattern of the object obj

*obj's pattern is { «named key»: «pattern», «named key»:«pattern» }

*so all together we have [ { «named key»: «pattern», «named key»: «pattern» } ]
*substituting in the values for each  «named key»: «pattern» pair, 

*we get array = [ { key1: 'value1', key2:'value2' } ]*/
`,
                        },
                    ],
                    [
                        {
                            type: 'section title',
                            content: 'Tip',
                            key: '000',
                        },
                        {
                            type: 'paragraph',
                            content:
                                'With destructuring, always consider the basic patterns. Everything will make a whole lot more sense with the patterns in mind.',
                            key: '001',
                        },
                    ],
                    [
                        {
                            type: 'section title',
                            content: 'Dynamic Destructuring Patterns',
                            key: '000',
                        },
                        {
                            type: 'paragraph',
                            content: `So far patterns seem like they are only one-offs... you can only use them for a single purpose. Is there a way we can abstract this further to make patterns we construct be used multi-purposely?`,
                            key: '001',
                        },
                        {
                            type: 'paragraph',
                            content: 'You sure can!',
                            key: '002',
                        },
                        {
                            type: 'keyword',
                            content: 'Computed Values',
                            key: '003',
                        },
                        {
                            type: 'keyword paragraph',
                            content:
                                'We can make our destructuring pattern a little bit more dynamic. Instead of having to set up a pattern that only ever looks for a particular key name in an object. We can set a key name to be computed from a variable',
                            key: '004',
                        },
                        {
                            type: 'code',
                            content: `
/*destructuring target pattern*/
const KEY = 'one';
const {[KEY]: newVar} = {one: 'value'};
/*what will this log?*/
console.log(newVar);

/*alternatively, we can also use computed values to set a key value pair in an object*/
const newObj = {[KEY]: 'value'};
/*what will this log?*/
console.log(newObj);
`,
                            key: '005',
                        },
                        {
                            type: 'code results',
                            content:
                                "newVar = 'value', newObj = {one: 'value'}",
                            key: '006',
                        },
                    ],
                    [
                        {
                            type: 'section title',
                            content:
                                "That's cool, but where is that practical??",
                            key: '000',
                        },
                        {
                            type: 'paragraph',
                            content:
                                'When I was first learning React, and learning about controlled components, this is a pattern that I would typically apply. While it is considered best practice to use a tool such as formik or react final form when working with forms, this is still a valuable pattern that can be use for other purposes',
                            key: '001',
                        },
                        {
                            type: 'code',
                            content: `
class Form extends Component {
    constructor() {
        super();
        this.state = {
            first: '',
            last: ''
        }
    }
    //...
    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }
    //...
    render() {
        return (
            <form>
                <input 
                    name='first' 
                    value={this.state.first} 
                    onChange={this.handleChange}
                />
                <input 
                    name='last' 
                    value={this.state.last} 
                    onChange={this.handleChange}
                />
            </form>
        );
    }
}                            
`,
                            key: '002',
                        },
                    ],
                ],
            },
        ],
    },
];
