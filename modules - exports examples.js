//lib.js
//examples of named exports
export const sqrt = Math.sqrt;
export function square(x) {
    return x * x;
}
export function diag(x, y) {
    return sqrt(square(x) + square(y));
}

//all three of these can be imported together or separately as

//import * as libFuncs from './lib';
//libFuncs.sqrt(4);//returns
2;
//import {sqrt, square, diag} from './lib';


//major improvement over commonJS
//only one export so have to gather everything into one object to export them all together
//and have to do explicit destructuring if you want to separate them out

//lib2-func.js
//examples of default exports
export default function() {}//can only have one of these

//lib2-class.js
export default class {} //can only have one of these;

//you can either not name your export as shown here, or you can name your export
export default class Whoa {};

//DEFAULT EXPORTS ARE THE ONLY PLACE WHERE JAVASCRIPT HAS ANONYMOUS FUNCTION DECLARATIONS AND ANONYMOUS CLASS DECLARATIONS

//NOTICE THAT THERE ARE NO SEMICOLONS AT THE END OF A DEFAULT EXPORT

//you can export default expressions
export default (function() {})

//you can also default export values directly
export default 5 * 7;

//this is only in existence to work around the fact that variable declarations can't be meaningfully turned into default exports if they declare
//multiple variables

//imports and exports must be at the top level of a file
//ES6 modules are static - you can't import conditionally (yet)

//imports are hoisted - they are moved up to the top of a file - it doesn't matter where they are stated, they will be moved up

foo();
import {foo} from 'module';

//imports are read-only views on exported entities
//connections to variable declared inside module bodies remain live - pretty interesting!!

//lib.js
export let counter = 3;
export function incCounter() {
    counter++;
}

//main.js
import {counter, incCounter} from './lib';

console.log(counter);//3
incCounter();
console.log(counter);//4
//imports as views allow for splitting code into multiple modules and it will continue to work
//it also allows for cyclic dependencies - A can import B at the same time as B imports A
//CYCLIC DEPENDENCIES SHOULD BE AVOIDED - MAKES TWO MODULES TIGHTLY COUPLED

//STYLES FOR IMPORTING
import localName from 'lib';//default import
import * as libFuncs from 'lib';//namespace import - importing everything from a module as an object
import {name1, name2} from 'lib';//named imports
import {name1 as localName, name2} from 'my_lib';//named imports with renaming
import {default as anotherName} from 'my_lib';//importing the default export and renaming it here
import 'lib.css'; //empty import - only loads the module, doesn't import anything - executes the body of the module - css modules!!

//can only combine in two ways: 
//default imports with namespace imports
import defaultObj, * as nameSpaceObj from 'lib';
//or default imports with named imports
import defaultObj, {namedObj} from 'lib';

//two ways to do named exports
//inline exports - mark declarations with keyword exports
export const foo = "foo";
//clause exports - exports at the end of a module
export {
    //stuff that you created - from here you can also export under different names
    //foo as FOO
}


//RE-EXPORTING 
//adding another module's exports to those of the current module
export * from 'lib';
//default exports in the file that this export occurs are ignored by export *
//or named exports
export {foo, whatever as aNicerWord} from 'lib';
//renaming is also okay here
//you can also do 
export {default} from 'lib';//this makes the default export of lib the default export of the module that this expression is
export {myFunc as default} from 'lib';//this makes myFunc of lib.js the default export of this module

//------ lib.js -----
export let counter = 3; 
export function incCounter() { 
    counter++; 
}
//------ main1.js -----
import { counter, incCounter } from './lib';
// The imported value `counter` is live 
console.log(counter); // 3 
incCounter(); 
console.log(counter); // 4
// The imported value can’t be changed 
counter++; // TypeError - counter is read only

//the reason that you cannot do export default const foo = ... is because the name for the export is default, and doing export default const foo would generate issues with naming

