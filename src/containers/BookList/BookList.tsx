import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { useAppSelector } from "../../hooks/useAppSelector";
import { getBooks, selectBooks } from "../../store/reducers/bookStore";

const BookList = () => {
  const book = useAppSelector(selectBooks);
  const dispatch: Dispatch<any> = useDispatch();

  const getBookListAction = useCallback(
    () => dispatch(getBooks()),
    // () => dispatch(getBooks({ getError: true })),
    [dispatch]
  );

  return (
    <div>
      <button onClick={getBookListAction}>Get Books</button>
      <div>error if any: {book.error}</div>
      {book.isLoading ? <span>loading</span> : <span>Not loading</span>}
      {book.list.map((book) => (
        <div key={book.title}>
          <div>{book.title}</div>
        </div>
      ))}
    </div>
  );
};

export default BookList;
