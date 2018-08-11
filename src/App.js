import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './Bookshelf.js'
import Search from './Search.js'


class BooksApp extends Component {
  constructor(props) {
    super(props);
    this.handleChangeShelf = this.changeShelf.bind(this);
  }

  state = {books: []}

  componentDidMount = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    });
  }

  changeShelf = (newBook, shelf) => {
    let newShelf = newBook.target.value;
    let newBookID = newBook.target.id;
    BooksAPI.update(newBook, shelf).then(change => {
      BooksAPI.getAll().then((books) => {
        let thisBook = books.filter((book) => (newBookID === book.id))
        thisBook[0].shelf = newShelf
        let newShelvedBooks = this.state.books.filter((book) => (newBookID !== book.id))
        newShelvedBooks.push(thisBook[0]);
        this.setState({books: newShelvedBooks})
        thisBook = [];
      })
    })
  }


  render() {
    return (
      <div className="app">
        <Route exact path ='/' render={() => (<BookShelf books={this.state.books} updateShelf={this.changeShelf}/>
        )}/>
      <Route path='/search' render={() => (<Search updateShelf={this.changeShelf}
      handlingClick={this.handleClick}/>
    )}/>
      </div>
    )
  }
}

export default BooksApp
