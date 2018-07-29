import React, {Component} from 'react'
import BooksApp from "./App.js"
import Shelf from "./Shelf.js"
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
              <Shelf />
          </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.author}</div>
          </div>
      </li>
   ))}
 </ol>
 )}
}

export default Book
