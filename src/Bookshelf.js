import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import Book from './Book.js'
import PropTypes from 'prop-types'
// import Search from './Search.js'

  class BookShelf extends Component {
    static propTypes = {
      books: PropTypes.array.isRequired,
    }

    state = {};

    render() {

      const {books} = this.props;
      const currentlyReading = books.filter((book) => (book.shelf === "currentlyReading"));
      const wantToRead = books.filter((book) => (book.shelf === "wantToRead"));
      const read = books.filter((book) => (book.shelf === "read"));

      return (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
              <ol className="books-grid">
              {this.props.books.filter((book) => {
               return book.shelf == "currentlyReading";}).map((book)=>{
                return <Book book={book} key={book.id} toUpdateShelf={this.props.updateShelf} />
              })}
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                {this.props.books.filter((book) => {
                 return book.shelf == "wantToRead";}).map((book)=>{
                  return <Book book={book} key={book.id} toUpdateShelf={this.props.updateShelf} />
                })}
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
              <ol className="books-grid">
              {this.props.books.filter((book) => {
               return book.shelf == "read";}).map((book)=>{
                return <Book book={book} key={book.id} toUpdateShelf={this.props.updateShelf} />
              })
            }
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className='open-search'>
        <Link to='/search' >Add a book</Link>
        </div>
      </div>

      )
    }
  }

  export default BookShelf
