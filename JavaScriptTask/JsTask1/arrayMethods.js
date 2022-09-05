module.exports = { myFilter, myFind, myMap, myReduce };

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
  if (arr === undefined && callback === undefined) {
    throw new Error(
      "ERROR function couldn't filter because there is neither callback function nor array"
    );
  } else if (arr === undefined) {
    throw new Error(
      "ERROR function couldn't filter because the array is not itialized"
    );
  } else if (callback === undefined) {
    throw new Error(
      "ERROR function couldn't filter because there is no callback function , undefined is not a functoin"
    );
  } else if (!Array.isArray(arr)) {
    throw new Error("Filter function don't accept any object other than array");
  } else {
    let array = [];

    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i])) array.push(arr[i]);
    }
    return array;
  }
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
  if (arr === undefined && callback === undefined) {
    throw new Error(
      "ERROR function couldn't map because there is neither callback function nor array"
    );
  } else if (arr === undefined) {
    throw new Error(
      "ERROR function couldn't map because the array is not itialized"
    );
  } else if (callback === undefined) {
    throw new Error(
      "ERROR function couldn't map because there is no callback function , undefined is not a functoin"
    );
  } else if (!Array.isArray(arr)) {
    throw new Error("Map function don't accept any object other than array");
  } else {
    let array = [];

    for (let i = 0; i < arr.length; i++) {
      array.push(callback(arr[i]));
    }
    return array;
  }
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
  if (arr === undefined && callback === undefined) {
    throw new Error(
      "ERROR function couldn't search to find the element because there is neither callback function nor array"
    );
  } else if (arr === undefined) {
    throw new Error(
      "ERROR function couldn't search to find the element because the array is not itialized"
    );
  } else if (callback === undefined) {
    throw new Error(
      "ERROR function couldn't search to find the element because there is no callback function , undefined is not a functoin"
    );
  } else if (!Array.isArray(arr)) {
    throw new Error("Find function don't accept any object other than array");
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i])) return arr[i];
    }
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
 * This callback is displayed as a global member.
 * @callback CallbackFun
 * @param {Object} accmulater
 * @param {Object} this[i]
 * @param {number} i
 * @param {Array} this
 */

/**
 * a function that calculate a single value over the array by calling callback fumction
 *  for each element and passing an intermediate result between the calls.
 * @param {Array} arr
 * @param {CallbackFun} Callback
 * @param {Object} initialValue
 */
function myReduce(arr, callback, initialValue = arr?.[0]) {
  if (arr === undefined && callback === undefined) {
    throw new Error(
      "ERROR function couldn't reduce because there is neither callback function nor array"
    );
  } else if (arr === undefined) {
    throw new Error(
      "ERROR function couldn't reduce because the array is not itialized"
    );
  } else if (callback === undefined) {
    throw new Error(
      "ERROR function couldn't reduce because there is no callback function , undefined is not a functoin"
    );
  } else if (!Array.isArray(arr)) {
    throw new Error("Reduce function don't accept any object other than array");
  } else {
    let i = 0;
    if (initialValue == arr[0]) {
      i = 1;
    }
    let accmulater = initialValue;

    for (i; i < arr.length; i++) {
      accmulater = callback(accmulater, arr[i]);
    }
    return accmulater;
  }
}

/**
 * a function that calculate a single value over the array by calling callback fumction
 *  for each element and passing an intermediate result between the calls.
 * @param {CallbackFun} Callback
 * @param {Object} initialValue
 * @param {Array} thisArg
 */
Array.prototype.myReduceFunc = function (
  callback,
  initialValue = this?.[0],
  thisArg
) {
  let i = 0;
  if (initialValue == this[0]) {
    i = 1;
  }
  let accmulater = initialValue;

  for (i; i < this.length; i++) {
    accmulater = callback.call(thisArg, accmulater, this[i], i, this);
  }
  return accmulater;
};
