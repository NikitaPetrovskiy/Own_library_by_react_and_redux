import React from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { BookMeta, FieldType } from "./BookMeta";
import { TextInput, NumericInput, SelectInput } from "../Inputs";
import { updateBookAC } from "../../Store";

const fieldTypeToComponent = {
    [FieldType.TEXT]: TextInput,
    [FieldType.NUMBER]: NumericInput,
    [FieldType.SELECT]: SelectInput
};

class EditBookForm extends React.Component {
    constructor(props) {
        super(props);
        const { id, ...other } = this.props.book;
        this.state = other;
    }

    render() {
        return (
            <form id="edit-form" onSubmit={e => e.preventDefault()}>
                {Object.entries(BookMeta).map(([field, description]) => {
                    const Field = fieldTypeToComponent[description.type];
                    return (
                        <div className=" edit-form-div form-group">
                            {description.type !== FieldType.ID && (
                                <label htmlFor={field}>{description.label}</label>
                            )}
                            {description.type === FieldType.ID && (
                                <h1>ID книги: {this.props.book.id}</h1>
                            )}
                            {description.type !== FieldType.ID && (
                                <Field
                                    key={this.props.book.id}
                                    name={field}
                                    value={this.state[field]}
                                    onChange={value =>
                                        this.setState({
                                            [field]: value
                                        })
                                    }
                                    description={description}
                                />
                            )}
                        </div>
                    );
                })}
                <Link className="btn btn-success" to="/books"
                      onClick={() => this.props.onEdit(this.props.book.id, this.state)}
                >Сохранить изменения</Link>
                <Link className="btn btn-primary" to="/books">Отмена</Link>
            </form>
        )
    };
};

const mapStateToProps = (state, ownProps) => {
    return {
        book: state.books.find(book => book.id === +ownProps.bookId)
    };
};
const mapDispatchToProps = dispatch => ({
        onEdit: (id, fields) => dispatch(updateBookAC(id, fields))
});

export const ConnectedEditBookForm = connect(mapStateToProps, mapDispatchToProps)(EditBookForm);
