const { tuple, point, vector } = require("./tuple");

test("A tuple with w=1.0 is a point", () => {
  const a = tuple(4.3, -4.2, 3.1, 1.0);
  expect(a).toEqual({ x: 4.3, y: -4.2, z: 3.1, w: 1.0 });
  expect(a.w).toEqual(1);
  expect(a.w).not.toEqual(0);
});
test("A tuple with w=0.0 is a vector", () => {
  const a = tuple(4.3, -4.2, 3.1, 0.0);
  expect(a).toEqual({ x: 4.3, y: -4.2, z: 3.1, w: 0.0 });
  expect(a.w).toEqual(0);
  expect(a.w).not.toEqual(1);
});
test("point() creates tuples with w=1", () => {
  const p = point(4, -4, 3);
  expect(p).toEqual(tuple(4, -4, 3, 1));
});
test("vector() creates tuples with w=0", () => {
  const p = vector(4, -4, 3);
  expect(p).toEqual(tuple(4, -4, 3, 0));
});
