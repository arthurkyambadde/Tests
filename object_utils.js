export function isObject(obj) {
  return obj !== null && typeof obj === "object";
}

export function isArray(obj) {
  return Array.isArray(obj);
}

export function isFunction(obj) {
  return typeof obj === "function";
}

export function isString(obj) {
  return typeof obj === "string";
}

export function isNumber(obj) {
  return typeof obj === "number";
}

export function isBoolean(obj) {
  return typeof obj === "boolean";
}

export function isUndefined(obj) {
  return typeof obj === "undefined";
}

export function isNull(obj) {
  return obj === null;
}

export function isEmpty(obj) {
  if (isArray(obj)) {
    return obj.length === 0;
  } else if (isObject(obj)) {
    return Object.keys(obj).length === 0;
  } else {
    return false;
  }
}

export function isNotEmpty(obj) {
  return !isEmpty(obj);
}

export function isEqual(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

export function isNotEqual(obj1, obj2) {
  return !isEqual(obj1, obj2);
}

export function isSame(obj1, obj2) {
  return obj1 === obj2;
}

export function isNotSame(obj1, obj2) {
  return !isSame(obj1, obj2);
}

export function isIn(obj, arr) {
  return arr.indexOf(obj) !== -1;
}

export function isNotIn(obj, arr) {
  return !isIn(obj, arr);
}

export function isContainedIn(obj, arr) {
  return arr.some((item) => isEqual(item, obj));
}

export function isNotContainedIn(obj, arr) {
  return !isContainedIn(obj, arr);
}

export function isContainedInAll(obj, arr) {
  return arr.every((item) => isEqual(item, obj));
}

export function isNotContainedInAll(obj, arr) {
  return !isContainedInAll(obj, arr);
}

export function isContainedInAny(obj, arr) {
  return arr.some((item) => isEqual(item, obj));
}

export function isNotContainedInAny(obj, arr) {
  return !isContainedInAny(obj, arr);
}

export function isContainedInNone(obj, arr) {
  return arr.every((item) => !isEqual(item, obj));
}

export function isNotContainedInNone(obj, arr) {
  return !isContainedInNone(obj, arr);
}

export function isContainedInAllExcept(obj, arr, except) {
  return arr.every((item) => isEqual(item, obj) || isEqual(item, except));
}

export function isNotContainedInAllExcept(obj, arr, except) {
  return !isContainedInAllExcept(obj, arr, except);
}

export function isContainedInAnyExcept(obj, arr, except) {
  return arr.some((item) => isEqual(item, obj) || isEqual(item, except));
}

export function isNotContainedInAnyExcept(obj, arr, except) {
  return !isContainedInAnyExcept(obj, arr, except);
}

export function isContainedInNoneExcept(obj, arr, except) {
  return arr.every((item) => !isEqual(item, obj) && !isEqual(item, except));
}

export function isNotContainedInNoneExcept(obj, arr, except) {
  return !isContainedInNoneExcept(obj, arr, except);
}

// Language: javascript
// Path: object_utilities.js
