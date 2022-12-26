export default function sortByKeys(sortableObject, sortOrder) {
  const sortedArray = [];
  sortOrder.forEach((element) => {
    if (element in sortableObject) {
      for (const key in sortableObject) {
        if (key === element) {
          const value = sortableObject[key];
          sortedArray.push({ key, value });
          delete sortableObject[`${key}`];
        }
      }
    } else {
      throw new Error(`Нет ключа ${element}`);
    }
  });
  const keyObj = Object.keys(sortableObject);
  keyObj.sort();
  keyObj.forEach((element) => {
    sortedArray.push({ key: element, value: sortableObject[element] });
  });
  return sortedArray;
}
