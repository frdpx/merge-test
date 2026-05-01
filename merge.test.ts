import { merge } from "./merge";

test("basic case", () => {
  expect(merge([1, 3, 5], [6, 4, 2], [2, 7, 9])).toEqual([
    1, 2, 2, 3, 4, 5, 6, 7, 9,
  ]);
});

test("empty arrays", () => {
  expect(merge([], [], [])).toEqual([]);
});

test("one array empty", () => {
  expect(merge([1, 2], [4, 3], [])).toEqual([1, 2, 3, 4]);
});

test("two arrays empty", () => {
  expect(merge([], [], [1, 2])).toEqual([1, 2]);
});

test("single elements", () => {
  expect(merge([1], [2], [3])).toEqual([1, 2, 3]);
});

test("collection 2 min to max", () => {
  expect(() => merge([1, 2, 3], [4, 5, 6], [7, 8, 9])).toThrow(
    "collection_2 must be sorted descending (max to min)",
  );
});

test("equal elements in collection 1 and 3", () => {
  expect(merge([1, 3, 5], [6, 4, 2], [1, 3, 5])).toEqual([
    1, 1, 2, 3, 3, 4, 5, 5, 6,
  ]);
});
