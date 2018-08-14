import React, {Component} from 'react'
import './App.css'
import noCover from './icons/no-cover-image.png'

class Book extends React.Component {

 render(){
   const {book} = this.props;

    return(
      <ol className="books-grid">
      <li>
        <div className="book">
          <div className="book-top">
          {(book.imageLinks !== undefined &&
            <div className="book-cover" style={{ width: 128, height: 188, backgroundImage:`url(${book.imageLinks.thumbnail})`}}></div>
          )}
            <div className="book-shelf-changer">
              <select id={book.id} value={book.shelf} onChange={this.props.toUpdateShelf}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
              </select>
            </div>
          </div>
          {(book.title !== undefined &&
            <div className="book-title">{book.title}</div>
            )}
            {book.authors && book.authors.map((author, index) => (
                  <div className="book-authors" key={index}>{author}</div>
              ))}
            <div className="book-authors">{book.shelf}</div>
          </div>
      </li>
 </ol>
 )}
}

export default Book
