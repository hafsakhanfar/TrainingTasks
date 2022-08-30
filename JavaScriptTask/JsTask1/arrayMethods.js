/**
 * This callback is displayed as a global member.
 * @callback givenCallback
 * @param {object} this[i]
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
   * an Array prototype function that returns a filtered list based on the provied callback function
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
  