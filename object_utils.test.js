import * as object_utilities from "./object_utils";

describe("Tests for object_utils", () => {
  test("object_utils.isUndefined checks wether type of object is undefined", () => {
    expect(object_utilities.isUndefined(undefined)).toBe(true);
    expect(object_utilities.isUndefined(true)).toBe(false);
    expect(object_utilities.isUndefined(false)).toBe(false);
    expect(object_utilities.isUndefined(null)).toBe(false);
    expect(object_utilities.isUndefined(5)).toBe(false);
    expect(object_utilities.isUndefined("ret")).toBe(false);
  });

  test("object_utils.isfunction checks wether type of object is a function", () => {
    expect(object_utilities.isFunction(() => {})).toBe(true);
    expect(object_utilities.isFunction({})).toBe(false);
    expect(object_utilities.isFunction([])).toBe(false);
    expect(object_utilities.isFunction(3)).toBe(false);
    expect(object_utilities.isFunction("boy")).toBe(false);
    expect(object_utilities.isFunction(true)).toBe(false);
    expect(object_utilities.isFunction(false)).toBe(false);
  });

  test("Check wether an object is contained in an array", () => {
    const obj = { name: "arthur" };
    const arr = [1, 3, 5, obj, 6];
    const arr2 = [2, 5, 7, 2, 5, 2];

    expect(object_utilities.isContainedIn(obj, arr)).toBe(true);
    expect(object_utilities.isContainedIn(obj, arr2)).toBe(false);
  });

  test("Check wether an object is not contained in an array", () => {
    const obj = { name: "arthur" };
    const arr = [1, 3, 5, obj, 6];
    const arr2 = [2, 5, 7, 2, 5, 2];

    expect(object_utilities.isNotContainedIn(obj, arr2)).toBe(true);
    expect(object_utilities.isNotContainedIn(obj, arr)).toBe(false);
  });

  test("Check wether an object is contained in any array except one", () => {
    const obj = { name: "arthur" };
    const arr = [1, 3, 5, obj, 6];
    const arr2 = [2, 5, 7, 2, 5, 2];
    const object = { name: "jimmy" };

    expect(object_utilities.isContainedInAnyExcept(obj, arr, arr2)).toBe(true);
    expect(object_utilities.isContainedInAnyExcept(obj, arr2, arr)).toBe(false);
    expect(object_utilities.isContainedInAnyExcept(object, arr, arr2)).toBe(
      false
    );
  });

  test("object is contained in all expect one", () => {
    const obj = { name: "arthur" };
    const arr = [obj];
    const arr2 = [2, 5, 7, 2, 5, 2];

    expect(object_utilities.isContainedInAllExcept(obj, arr, arr2)).toBe(true);

    expect(object_utilities.isContainedInAllExcept(3, [3, 6, 3], 6)).toBe(true);
  });

  test("object is not contained in all except", () => {
    expect(
      object_utilities.isNotContainedInAllExcept(2, [4, 5], [2, 2, 2])
    ).toBe(true);
  });

  test("value is contained in any except where the other is", () => {
    expect(
      object_utilities.isContainedInAnyExcept(2, [2, 4, 7, 2], [4, 2])
    ).toBe(true);

    expect(
      object_utilities.isContainedInAnyExcept(6, [2, 4, 7, 2], [4, 2])
    ).toBe(false);
  });
});

test("value is contained in none of the array positions axcept in the later", () => {
  expect(object_utilities.isContainedInNoneExcept(3, [4, 6, 9, 1], 2)).toBe(
    true
  );
  expect(
    object_utilities.isContainedInNoneExcept(3, [4, 3, 6, 9, 1], [3, 5, 7])
  ).toBe(false);
});

export function isContainedInAnyExcept(obj, arr, except) {
  return arr.some((item) => isEqual(item, obj) || isEqual(item, except));
}
