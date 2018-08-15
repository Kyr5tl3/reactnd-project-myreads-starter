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

  componentDidMount() {

    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }



  changeShelf = (book, shelf) => {

        let moveBookID = book.target.id
        let currentBooks = [...this.state.books]
        let indexToMove = currentBooks.findIndex(book => book.id === moveBookID)
        let bookToMove = Object.assign({}, currentBooks[indexToMove], {
            shelf: book.target.value
        });
        let newShelf = book.target.value
        let newBookToAdd = [];
        if (indexToMove === -1){

        let newBookToAdd = BooksAPI.get(moveBookID)
                  .then(addBook => {
                    addBook.shelf = newShelf
                    return addBook
                    //
                    // newBookToAdd = Object.assign({}, addBook, {
                    //   shelf: newShelf
                  }).then((book)=>{
                    currentBooks.push(book)
                    this.setState({books: currentBooks})
                  })

        }
         else {
          this.setState(state => ({
              books: [...currentBooks.slice(0, indexToMove), bookToMove]
            }))
            return this.state.books
      }

    }



  render() {

    console.log('check state',this.state.books)
    return (
      <div className="app">
        <Route exact path ='/' render={() => (<BookShelf books={this.state.books} updateShelf={this.changeShelf}/>
        )}/>
    )}/>
      </div>
    )
  }
}

export default BooksApp
