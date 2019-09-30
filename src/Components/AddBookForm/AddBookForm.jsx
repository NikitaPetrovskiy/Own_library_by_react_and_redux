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
          <form onSubmit={ e => {
              e.preventDefault();
              this.props.onAdd(this.state);} }
          >
              <input name="title"
                  type="text"
                  value={this.state.title}
                  onChange={this.onChange}
              />
              <input name="author"
                  type="text"
                  value={this.state.author}
                  onChange={this.onChange}
              />
              <Link to="/books"
                    onClick={ () => {
                        this.props.onAdd(this.state);} }
              > Добавить </Link>
              <Link to="/books">Отменить</Link>
          </form>
      )
  }
};

const mapStateToProp = () => {
    return {}
};
const mapDispatchToProp = (dispatch) => {
   return  {
       onAdd: book => dispatch(addBookAC(book))
   }
};

export const ConnectedAddBookForm = connect(mapStateToProp, mapDispatchToProp)(AddBookForm);
