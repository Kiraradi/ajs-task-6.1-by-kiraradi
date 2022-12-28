export default function sortByKeys(sortableObject, sortOrder) {
  const { ...cloneTargetObject } = sortableObject;
  const sortedArray = [];
  sortOrder.forEach((element) => {
    if (element in cloneTargetObject) {
      sortedArray.push({ key: element, value: sortableObject[element] });
      delete cloneTargetObject[`${element}`];
    } else {
      throw new Error(`Нет ключа ${element}`);
    }
  });
  const keyObj = Object.keys(cloneTargetObject);
  keyObj.sort();
  keyObj.forEach((element) => {
    sortedArray.push({ key: element, value: cloneTargetObject[element] });
  });
  return sortedArray;
}
