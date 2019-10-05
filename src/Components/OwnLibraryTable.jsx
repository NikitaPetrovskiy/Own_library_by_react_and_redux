import React from 'react';
import { connect } from "react-redux";
import { BookStatuses } from "../Store";
import { deleteBookAC } from "../Store";
import { Link } from "react-router-dom";

const statusToText = {
    [BookStatuses.NONE]: '',
    [BookStatuses.TO_READ]: 'Хочу прочитать',
    [BookStatuses.READING]: 'Читаю',
    [BookStatuses.READ]: 'Прочитал'
};

export const OwnLibraryTable = ({books, onDelete}) => {
    return (
        <>
            <div className="navbar navbar-dark bg-dark shadow-sm">
                <div className="container d-flex justify-content-left bg-dark shadow-sm">
                    <Link to="/books/new" className="btn btn-success" >Добавить книгу</Link>
                </div>
            </div>
            <table className="table table-dark table-striped">
                <thead >
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Автор</th>
                        <th scope="col">Название</th>
                        <th scope="col">Рейтинг</th>
                        <th scope="col">Статус</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                {books.map(book => (
                    <tr key={book.id}>
                        <td>{book.id}</td>
                        <td>{book.author}</td>
                        <td>{book.title}</td>
                        <td>{book.rating}</td>
                        <td>{statusToText[book.status]}</td>
                        <td>
                            <Link className="btn btn-info" to={`/books/${book.id}`}>
                                Редактировать
                            </Link>
                        </td>
                        <td>
                            <button className="btn btn-danger" onClick={() => onDelete(book.id)}>
                                Удалить
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        books: state.books
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        onDelete: id => dispatch(deleteBookAC(id))
    };
};

export const ConnectedOwnLibrary = connect(mapStateToProps, mapDispatchToProps)(OwnLibraryTable);
