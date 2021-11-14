export function censureship(arr, controlArr) {
  return arr.filter(({ id }) => !controlArr.includes(id));
}
