import React, {Component} from 'react'
import BooksApp from "./App.js"
// import Shelf from "./Shelf.js"
import './App.css'

class Book extends Component {

 render(){
    return(
      <ol className="books-grid">
      {this.props.books.map((book) => (
      <li key={book.coverURL}>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 188, backgroundImage:`url(${book.coverURL})`}}>
            </div>
            <div className="book-shelf-changer">
              <select onChange={this.changeShelf}>
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
