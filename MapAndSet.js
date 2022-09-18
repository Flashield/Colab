let map = new Map();
map.set('1', 'str1');
map.set(1, 'num1');
map.set(true, 'Bool');
console.log(map.get('1'));
console.log(map.size);

// 可以使用对象作为键值
let john = {name: "John Smith"};
let vistsCountMap = new Map();
vistsCountMap.set(john, john.name);
console.log(vistsCountMap.get(john));

// 使用对象作为键是 Map 最值得注意和重要的功能之一。在 Object 中，我们则无法使用对象作为键。在 Object 中使用字符串作为键是可以的，但我们无法使用另一个 Object 作为 Object 中的键。

// let john = {name: "John Smith1"};
let ben = {name: "Ben Jose"};
let visitsCountObj = {}; //使用对象
visitsCountObj[john] = 123;
visitsCountObj[ben] = 456;
console.log(visitsCountObj[john]);
console.log(visitsCountObj["[object Object]"]);

// 因为 visitsCountObj 是一个对象，它会将所有 Object 键例如上面的 john 和 ben 转换为字符串 "[object Object]"。这显然不是我们想要的结果。

map.set('2', 'str2')
   .set(2, 'num2')
   .set(false, 'Bool2');
console.log(`map size:${map.size}`);

let recipeMap = new Map([
   ['cucumber', 500],
   ['tomato', 350],
   ['onion', 50]
]);
console.log(recipeMap.keys());
console.log(map.keys());