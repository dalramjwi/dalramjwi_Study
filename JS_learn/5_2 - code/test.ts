function addItem<T>(array: T[], item: T, index: number): T[] {
  let newArray: T[] = [];

  function isIndexAfterInsertionPoint(currentIndex: number): boolean {
    return currentIndex > index;
  }

  for (let i = 0; i < array.length; i++) {
    if (i === index) {
      newArray[i] = item;
    } else if (isIndexAfterInsertionPoint(i)) {
      newArray[i] = array[i - 1];
    } else {
      newArray[i] = array[i];
    }
  }
  return newArray;
}
