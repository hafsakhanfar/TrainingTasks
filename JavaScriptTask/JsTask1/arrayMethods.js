/**
 * This callback is displayed as a global member.
 * @callback givenCallback
 * @param {Object} this[i]
 * @param {number} i
 * @param {Array} this
 */

/**
 * a function that returns a filtered list based on the provied callback function
 * @param {Array} arr
 * @param {callback} Callback
 */

function myFilter(arr, callback) {
  let array = [];

  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) array.push(arr[i]);
  }
  return array;
}

/**
 * an Array prototype function that returns a filtered list based on the provided callback function
 * @param {Array} thisArg
 * @param {givenCallback} callback
 */

Array.prototype.myFilterFunc = function myFilterFunc(callback, thisArg) {
  let array = [];

  for (let i = 0; i < this.length; i++) {
    if (callback.call(thisArg, this[i], i, this)) array.push(this[i]);
  }
  return array;
};

/**
 * a function that returns a mapped list based on the provided function
 * @param {Array} arr
 * @param {callback} Callback
 */

function myMap(arr, callback) {
  let array = [];

  for (let i = 0; i < arr.length; i++) {
    array.push(callback(arr[i]));
  }
  return array;
}

/**
 * an Array prototype function that returns a mapped list based on the provided function
 * @param {givenCallback} callback
 * @param {Array} thisArg - optinal
 */
Array.prototype.myMapFunc = function (callback, thisArg) {
  let array = [];

  for (let i = 0; i < this.length; i++) {
    array.push(callback.call(thisArg, this[i], i, this));
  }
  return array;
};

/**
 * a function that search for an element based on the provied callback function conditions and return it
 * @param {Array} arr
 * @param {callback} Callback
 */

function myFind(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) return arr[i];
  }
}

/**
 * an Array prototype function that  search for an element based on the provied callback function conditions and return it
 * @param {Array} thisArg
 * @param {givenCallback} callback
 */

Array.prototype.myFindFunc = function (callback, thisArg) {
  for (let i = 0; i < this.length; i++) {
    if (callback.call(thisArg, this[i], i, this)) return this[i];
  }
};

/**
 * example to try the functions
 */

const items = [
  {
    name: "book",
    price: 50,
    id: "12fa21",
  },
  {
    name: "book2",
    price: 10,
    id: "12fa21",
  },
  {
    name: "book2",
    price: 20,
    id: "12fa21",
  },
  {
    name: "book2",
    price: 30,
    id: "12fa21",
  },
];

const itemsAsPriceMoreThan20 = items.myFilterFunc(({ price }) => price > 20);
console.log(itemsAsPriceMoreThan20);

console.log(myFilter(items, ({ price }) => price > 20));

const appliedDiscountItems = items.myMapFunc((item) =>
  item.price > 20 ? { ...item, price: item.price * 0.99 } : item
);

console.log(appliedDiscountItems);
console.log(
  myMap(items, (item) =>
    item.price > 20 ? { ...item, price: item.price * 0.99 } : item
  )
);

const itemcosted20$ = items.myFindFunc(({ price }) => price > 20);
console.log(itemcosted20$);

console.log(myFind(items, ({ price }) => price > 20));
