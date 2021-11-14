export function removeFavoriteMovie(storageKeyName, targetObject) {
  let result = [...JSON.parse(localStorage.getItem(storageKeyName))];
  result = result.filter((item) => item.id !== targetObject.id);
  localStorage.setItem(storageKeyName, JSON.stringify(result));
}
