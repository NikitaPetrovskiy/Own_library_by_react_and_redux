import {LibraryActions} from "./LibraryActions";

function addToArray(array, objectToAdd) {
    return [...array, objectToAdd];
};

function removeFromArrayById(array, id) {
    const index = array.findIndex(obj => obj.id === id);
    if (index > -1) {
        return [...array.slice(0, index), ...array.slice(index + 1)];
    }
    return array;
};

function updateInArray(array, object) {
    const index = array.findIndex(obj => obj.id === object.id);
    if (index > -1) {
        return [
            ...array.slice(0, index),
            { ...array[index], ...object },
            ...array.slice(index + 1)
        ];
    }
    return array;
};

function saveToLocalStorage(StorageItem) {
    localStorage.setItem("OwnLibrary", JSON.stringify(StorageItem));
};
function loadFromLocalStorage() {
    const fromLocalStorage = localStorage.getItem("OwnLibrary");
    const books = fromLocalStorage ? JSON.parse(fromLocalStorage) : [];
    return {
        books
    };
};

export const LibraryReducer = (state, action) => {
    if (typeof state === "undefined") {
        return loadFromLocalStorage();
    }
  let books;
  switch (action.type) {
      case LibraryActions.ADD: {
          books = addToArray(state.books, {
              ...action.payload,
              id: Math.round(Math.random().toString() * 10000)
          });
          break;
      }
      case LibraryActions.DELETE: {
          books = removeFromArrayById(state.books, action.payload.id);
          break;
      }
      case LibraryActions.UPDATE: {
          books = updateInArray(state.books, action.payload);
          break;
      }
      default:
          return state;
  }
  saveToLocalStorage(books);

  return {
      books
  };
};
