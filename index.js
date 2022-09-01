// function greet() {
//   let n = "Raj";
//   return function () {
//     return function () {
//       console.log(n);
//     };
//   };
// }

// let x = greet();
// let y = x();
// y();

// function sum(a, b, c) {
//   if (b === undefined) {
//     return (b) => {
//       return (c) => a + b + c;
//     };
//   } else {
//     return a + b + c;
//   }
// }

// console.log(sum(1)(2)(3));

// console.log(sum(2, 4, 3));

// function myMap(array, callback) {
//   let out = [];
//   for (let i = 0; i < array.length; i++) {
//     out.push(callback(array[i], i, array));
//   }
//   return out;
// }

// console.log(myMap([1, 2, 3, 4, 5], (el) => el * 2));

// function myForEach(array, callback) {
//   for (let i = 0; i < array.length; i++) {
//     callback(array[i], i, array);
//   }
// }

// myForEach([1, 2, 3, 4, 5], (el) => console.log(el));

// function myFilter(array, callback) {
//   let out = [];

//   for (let i = 0; i < array.length; i++) {
//     let result = callback(array[i], i, array);
//     if (result) {
//       out.push(array[i]);
//     }
//   }
//   return out;
// }
// console.log(myFilter([1, 2, 3, 4, 5], (el) => el % 2 === 0));

// function myReduce(array, callback, initial) {
// let start, acc
//   if (initial === undefined) {
//     acc = array[0];
//     start = 1;
//   } else {
//     acc = initial;
//     start = 0;
//   }

//   for (let i = start; i < array.length; i++) {
//     acc = callback(acc, array[i], i, array);
//   }
//   return acc;
// }

// console.log(myReduce([1, 2, 3, 4, 5], (acc, el) => acc + el, 0));

/* function myForEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}

myForEach([1, 2, 3, 4, 5], (el, i, array) => {
  console.log("elem:", el, "index:", i, "Array:", array);
});
*/

// function myMap(array, callback) {
//   let out = [];

//   for (let i = 0; i < array.length; i++) {
//     out.push(callback(array[i], i, array));
//   }

//   return out;
// }

// console.log(myMap([1, 2, 3, 4, 5], (el) => el * 3));

// function myFilter(array, callback) {
//   let out = [];

//   for (let i = 0; i < array.length; i++) {
//     let result = callback(array[i], i, array);
//     if (result) {
//       out.push(array[i]);
//     }
//   }
//   return out;
// }

// console.log(myFilter([1, 2, 3, 4, 5], (el) => el % 2 === 0));

// function myReduce(array, callback, initial) {
//   let acc;
//   let start;
//   if (initial === undefined) {
//     acc = array[0];
//     start = 1;
//   } else {
//     acc = initial;
//     start = 0;
//   }

//   for (let i = start; i < array.length; i++) {
//     acc = callback(acc, array[i], i, array);
//   }
//   return acc;
// }

// console.log(
//   myReduce(
//     [1, 2, 3, 4, 5],
//     (acc, val) => {
//       return acc + val;
//     },
//     0
//   )
// );

// function sum(a, b, c) {
//   if (b === undefined) {
//     return (b) => {
//       return (c) => a + b + c;
//     };
//   } else {
//     return a + b + c;
//   }
// }

// console.log(sum(2, 3, 5));

// function toggler() {
//   let cur = 0;
//   let arr = arguments;

//   return () => {
//     let val = arr[cur++ % arr.length];
//     return val;
//   };
// }

// let toggle = toggler(1, 2, 3);

// console.log(toggle());
// console.log(toggle());
// console.log(toggle());
// console.log(toggle());
// console.log(toggle());
// console.log(toggle());
// console.log(toggle());

// function DebounceFn(func, delay) {
//   let timer;

//   return () => {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       func();
//     }, delay);
//   };
// }
// DebounceFn(() => {
//   console.log("hello");
// }, 2000);

// function throttle(func, delay) {
//   let prevTime = 0;
//   return () => {
//     let currentTime = Date.now();
//     if (currentTime - prevTime > delay) {
//       prevTime = currentTime;
//       return func();
//     }
//   };
// }

// throttle(() => {
//   console.log("throttle");
// }, 2000);

// function myForEach(Array, callback) {
//   for (let i = 0; i < Array.length; i++) {
//     callback(Array[i], i, Array);
//   }
// }

// myForEach([1, 2, 3, 4, 5], (el, i, array) => {
//   console.log(el, i, array);
// });

// function myMap(array, callback) {
//   let out = [];
//   for (let i = 0; i < array.length; i++) {
//     out.push(callback(array[i], i, array));
//   }
//   return out;
// }

// console.log(myMap([1, 2, 3, 4, 5], (el) => el * 2));

// function myFilter(array, callback) {
//   let out = [];
//   for (let i = 0; i < array.length; i++) {
//     let result = callback(array[i], i, array);
//     if (result) {
//       out.push(array[i]);
//     }
//   }
//   return out;
// }

// console.log(
//   myFilter([1, 2, 3, 4, 5], (el) => {
//     return el % 2 === 0;
//   })
// );

// function myReduce(array, callback, initial) {
//   let acc, start;
//   if (initial === undefined) {
//     acc = array[0];
//     start = 1;
//   } else {
//     acc = initial;
//     start = 0;
//   }

//   for (let i = start; i < array.length; i++) {
//     acc = callback(acc, array[i], i, array);
//   }
//   return acc;
// }

// console.log(
//   myReduce([1, 2, 3, 4, 5], (acc, val) => {
//     return acc + val;
//   })
// );

// let obj = {
//   a: 1,
//   b: 2,
//   c: 3,
// };

// function sum(d, e) {
//   return d + e + this.a + this.b + this.c;
// }

// console.log(sum.call(obj, 2, 4));

// console.log(sum.apply(obj, [2, 4]));

// let x = sum.bind(obj, 2, 4);

// console.log(x());

// let five = new Promise((resolve, reject) => {
//   resolve("i M resolver");
//   reject("i m reject");
// });

// console.log(five);

// Constructor function --- Constructor function is a similar to normal function but it is the different way to call this function using new keyword;

// function Student(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;

//   this.getFullName = function () {
//     console.log(`${this.firstName} ${this.lastName}`);
//   };
// }

// let student1 = new Student("John", "Doe");

// console.log(student1.firstName);
// console.log(student1.lastName);

// student1.getFullName();

// class Car {
//   setName(name) {
//     return (this.name = name);
//   }

//   startEngine() {
//     console.log("Engine started for " + this.name);
//   }

//   stopEngine() {
//     console.log("Engine Stopped for " + this.name);
//   }
// }

// class Toyota extends Car {
//   topSpeed(speed) {
//     console.log("Top speed for " + this.name + " is " + speed);
//   }
// }

// let myCar = new Toyota();

// console.log(myCar.setName("Camry"));
// console.log(myCar.startEngine());
// console.log(myCar.stopEngine());
// console.log(myCar.topSpeed(200));

// console.log(y); ------> undefined
// var y = 10;

// console.log(y); ------> ReferenceError: Cannot access 'y' before initialization
// let y = 10;

// Bubble Sort Algorithm

// let arr = [2, 4, 1, 0, 8, 5];

// for (let i = 0; i < arr.length - 1; i++) {
//   for (let j = 0; j < arr.length - i - 1; j++) {
//     if (arr[j] > arr[j + 1]) {
//       [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//     }
//   }
// }

// console.log(arr);

// Selection Sort Algorithm

// let arr = [2, 4, 1, 0, 8, 5];

// for (let i = 0; i < arr.length - 1; i++) {
//   let min = i;
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[min] > arr[j]) {
//       min = j;
//     }
//   }

//   [arr[min], arr[i]] = [arr[i], arr[min]];
// }

// console.log(arr);

// print pattern this manner
// 1
// 2 3
// 4 5 6
// 7 8 9 10

// given size of the pattern;

// let size = 4;

// let count = 0;
// for (let i = 1; i <= size; i++) {
//   let line = "";
//   for (let j = 1; j <= i; j++) {
//     ++count;
//     line += count + " ";
//   }

//   console.log(line);
// }

// let max = 5;
// let stack = [];
// let current = stack.length;

// function Push(newVal) {
//   if (current <= max) {
//     stack[current] = newVal;
//     current += 1;
//   } else {
//     alert("Stack is fulled");
//   }
// }

// Push(2);
// Push(4);
// Push(8);
// Push(10);
// Push(7);
// Push(56);

// console.log(stack);

// let stack = [4, 6, 2];
// let current = stack.length;

// function pop() {
//   if (current > 0) {
//     current -= 1;
//     stack.length = current;
//   } else {
//     alert("stack is already empty");
//   }
// }

// pop();
// pop();
// pop();
// console.log(stack);

// *****
// #****
// ##***
// ###**
// ####*
// #####

// function patternPrint(n, m) {
//   var l = 0;
//   var arr = [];
//   for (let i = 0; i < n; i++) {
//     var x = [];
//     var t = l;
//     while (t > 0) {
//       x.push("#");
//       t--;
//     }
//     for (let j = l + 1; j <= m; j++) {
//       x.push("*");
//     }
//     arr.push(x.join(""));
//     l++;
//   }
//   return arr.join("\n");
// }

// console.log(patternPrint(6, 5));

// 54321
// 4321
// 321
// 21
// 1

// for (let i = 5; i >= 1; i--) {
//   line = "";

//   for (let j = i; j >= 1; j--) {
//     line += j;
//   }

//   console.log(line);
// }

// let arr = [6, 3, 8, 1, 7, 2];

// let max = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (max < arr[i]) {
//     max = arr[i];
//   }
// }

// console.log(max);

// let arr = [1, 2, 3, 4, 5];

// let found1 = arr.find((el) => el > 3);
// let found2 = arr.filter((el) => el > 3);

// console.log(found1);
// console.log(found2);

// let arr = [3, 1, 3, 3, 2];

// let obj = {};
// let result = 0;

// for (let i = 0; i < arr.length; i++) {
//   let num = arr[i];
//   if (obj[num] === undefined) {
//     obj[num] = 1;
//   } else obj[num] += 1;
// }

// for (key in obj) {
//   if (result < obj[key]) {
//     result = key;
//   }
// }

// if (result > arr.length / 2) {
//   console.log(result);
// }

// Reverse an String with the help of stack;

// let arr = [];
// let currentVal = arr.length;

// function push(newVal) {
//   arr[currentVal] = newVal;
//   currentVal++;
// }

// function pop() {
//   let element = arr[currentVal - 1];
//   currentVal--;
//   arr.length = currentVal;

//   return element;
// }

// let str = "anil";

// let result = "";

// function reverseString(str) {
//   for (let i = 0; i < str.length; i++) {
//     arr.push(str[i]);
//   }

//   for (let i = 0; i < str.length; i++) {
//     result += arr.pop();
//   }
// }

// reverseString(str);

// console.log(result);
// let Product = [{ name: "rihan" }];

// Route.get("", async (res, req) => {
//   try {
//     let result = await Product.find();

//     res.send(200).json({
//       result: result,
//     });
//   } catch (error) {
//     console.log(error);

//     res.send(500).send(
//       json({
//         error: error,
//       })
//     );
//   }
// });

// export default function App() {
//   const [date, setDate] = useState(new Date());

//   useEffect(() => {
//     setInterval(() => {
//       setDate(new Date());
//     }, 1000);
//   }, []);

//   return <div>{date.toString()}</div>;
// }

// class Stack {
//   item = [];
//   currentSize;
//   maxSize;
//   constructor(size) {
//     this.maxSize = size;
//     this.currentSize = this.item.length;
//   }

//   push(newVal) {
//     if (this.currentSize >= this.maxSize) {
//       alert("Stack is full");
//     } else {
//       this.item[this.currentSize] = newVal;
//       this.currentSize++;
//     }
//   }

//   pop() {
//     if (this.currentSize < 1) {
//       alert("Stack is already Empty");
//     } else {
//       this.currentSize--;
//       this.item.length = this.currentSize;
//     }
//   }

//   display() {
//     console.log(this.item);
//   }
// }

// let stack = new Stack(5);
