const unSortedCollection = [6, -3, 2, 1, 4, 8, 25, 0];

// Сортировка выбором:

function selectedSort(array: number[]) {
  for (let index = 0; index < array.length - 1; index++) {
    for (let innerIndex = index + 1; innerIndex < array.length; innerIndex++) {
      let minIndex = index;

      if (array[innerIndex] < array[minIndex]) {
        minIndex = innerIndex;
      }

      if (minIndex !== index) {
        const stash = array[index];
        array[index] = array[minIndex];
        array[minIndex] = stash;
      }
    }
  }
  return array;
}

// console.log(selectedSort(unSortedCollection));

// Пузырьковая сортировка:

function bubbleSort(array: number[]) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
}

console.log(bubbleSort(unSortedCollection));
