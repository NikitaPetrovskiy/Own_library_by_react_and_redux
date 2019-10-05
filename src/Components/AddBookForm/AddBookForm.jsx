import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addBookAC } from "../../Store";

export class AddBookForm extends React.Component {
  state = {
      title: '',
      author: ''
  };
  onChange = e => {
      this.setState({
          [e.target.name]: e.target.value
      });
  };

  render() {
      return (
          <form id="add-form"
              onSubmit={ e => {
              e.preventDefault();
              this.props.onAdd(this.state);} }
          >
              <div className="form-group">
                  <label htmlFor="bookname">Название Книги</label>
              <input className="form-control" id="bookname"
                  name="title"
                  type="text"
                     placeholder="Введите название"
                  value={this.state.title}
                  onChange={this.onChange}
              />
              </div>
              <div className="form-group">
                  <label htmlFor="author">Автор Книги</label>
                  <input className="form-control" id="bookname"
                         name="author"
                         type="text"
                         placeholder="Введите автора"
                         value={this.state.author}
                         onChange={this.onChange}
              />
              </div>
              <Link className="btn btn-success" to="/books"
                    onClick={ () => {
                        this.props.onAdd(this.state);} }
              > Добавить </Link>
              <Link className="btn btn-primary" to="/books">Отменить</Link>
          </form>
      )
  }
};

const mapStateToProps = () => {
    return {}
};
const mapDispatchToProps = (dispatch) => {
   return  {
       onAdd: book => dispatch(addBookAC(book))
   }
};

export const ConnectedAddBookForm = connect(mapStateToProps, mapDispatchToProps)(AddBookForm);
