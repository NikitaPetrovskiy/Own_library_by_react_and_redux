import {LibraryActions} from "./LibraryActions";

const initialState = {
    books: []
};

function addToArray(array, objectToAdd) {
    return [...array, objectToAdd];
}

function removeFromArrayById(array, id) {
    const index = array.findIndex(obj => obj.id === id);
    if (index > -1) {
        return [...array.slice(0, index), ...array.slice(index + 1)];
    }
    return array;
}

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
}

export const LibraryReducer = (state = initialState, action) => {
  let books;
  switch (action.type) {
      case LibraryActions.ADD: {
          books = addToArray(state.books, {
              ...action.payload,
              id: Math.random().toString()
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

  return {
      books
  };
};