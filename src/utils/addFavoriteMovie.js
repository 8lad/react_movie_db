export function addFavoriteMovie(storageKeyName, targetObject) {
  let result = [];
  if (localStorage.getItem(storageKeyName)) {
    result = [...JSON.parse(localStorage.getItem(storageKeyName))];
    result.push(targetObject);
    localStorage.setItem(storageKeyName, JSON.stringify(result));
    return false;
  }
  result.push(targetObject);
  localStorage.setItem(storageKeyName, JSON.stringify(result));
}
