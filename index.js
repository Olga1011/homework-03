// Write a JavaScript function that returns the function name.

function returnFuncName(func) {
  let stringFunc = func.toString().trim();
  let index = stringFunc.indexOf("(");
  let name = stringFunc.slice(9, index);
  return name;
}

// console.log(returnFuncName("function first()"));

//Second method
function returnFuncName(func) {
  let string = func.toString().replace(/function|([\(\)])/g, "");

  return string;
}

// Write a function that receives a random nr of string arguments
// a story generated with the help of these arguments and other custom text.

function creatStory(...args) {
  let arrFromArg = args;
  let story = arrFromArg.join(" ");
  return story;
}
// console.log("And", "you", "know", "that", "is", "true");

// Extend the default values functionality (for function parameters) to set to default
// not only the undefined values but also the null values (but not other falsy values)
function getSum(a = 12, b = 10) {
  a = typeof a !== "object" ? a : 4;
  b = typeof b !== "object" ? b : 5;
  return b + a;
}

// console.log(getSum(null, null));

// Write a function that behaves differently depending on the nr of arguments being passed
function getPerim(...args) {
  let num = args;
  console.log(num);
  let perimeter = num.reduce((arg1, arg2) => {
    if (num.length === 3) {
      return arg1 + arg2;
    } else if (num.length === 2) {
      return arg1 * 2 + arg2 * 2;
    } else {
      return "Don't know what to do ";
    }
  });
  return perimeter;
}

console.log(getPerim(1, 3, 5));
