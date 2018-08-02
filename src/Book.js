import React, {Component} from 'react'
import './App.css'
// import PropTypes from 'prop-types'

class Book extends Component {
  // static propTypes = {
  //   Books: PropTypes.array.isRequired,
  // }

 render(){
    return(
      <ol className="books-grid">
      {this.props.books.map((book) => (
      <li key={book.id}>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 188, backgroundImage:`url(${book.imageLinks.thumbnail})`}}>
            </div>
            <div className="book-shelf-changer">
              <select onChange={this.props.toUpdateShelf}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
              </select>
            </div>
          </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors}</div>
            <div className="book-authors">{book.shelf}</div>
          </div>
      </li>
   ))}
 </ol>
 )}
}

export default Book
