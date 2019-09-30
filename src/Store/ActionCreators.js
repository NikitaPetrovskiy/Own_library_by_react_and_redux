import { LibraryActions } from "./LibraryActions";
import { BookStatuses } from "./BookStatuses";

// AC - ActionCreator
export function addBookAC(book) {
    return {
        type: LibraryActions.ADD,
        payload: {
            status: BookStatuses.NONE,
            rating: 0,
            ...book
        }
    };
};

export function deleteBookAC(bookId) {
  return {
      type: LibraryActions.DELETE,
      payload: {
          id: bookId
      }
  };
};

export function updateBookAC(bookId, fieldsToUpdate) {
    return {
        type: LibraryActions.UPDATE,
        payload: {
            id: bookId,
            ...fieldsToUpdate
        }
    };
};
