import React from 'react'
import './App.css'
import Book from './Book.js'
import PropTypes from 'prop-types'

  class BookShelf extends React.Component {
    static propTypes = {
      books: PropTypes.array.isRequired,
    }

    render() {

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
                <Book books={this.props.books.filter((book) => (book.shelf === "currentlyReading"))} toUpdateShelf={this.props.updateShelf} />
              </div>
            </div>
          </div>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <Book books={this.props.books.filter((book) => (book.shelf === "wantToRead"))} />
              </div>
            </div>
          </div>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <Book books={this.props.books.filter((book) => (book.shelf === "read"))} />
              </div>
            </div>
          </div>
        </div>
        <div className="open-search">
          <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
        </div>
      </div>

      )
    }
  }

  export default BookShelf