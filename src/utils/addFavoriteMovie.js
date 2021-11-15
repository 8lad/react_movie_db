export function addFavoriteMovie(storageKeyName, targetObject) {
  let result = [];
  if (localStorage.getItem(storageKeyName)) {
    result = [...JSON.parse(localStorage.getItem(storageKeyName))];
    if (!result.some((item) => item.id === targetObject.id)) {
      result.push(targetObject);
      localStorage.setItem(storageKeyName, JSON.stringify(result));
      return;
    }
    return;
  }
  result.push(targetObject);
  localStorage.setItem(storageKeyName, JSON.stringify(result));
}
