import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './Bookshelf.js'
import Search from './Search.js'


class BooksApp extends React.Component {
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


  changeShelf = (book, shelf) => {
    console.log('function is passing')
  //   BooksAPI.update({id: book.id}, shelf).then(() => {
  //     book.shelf = shelf
  //     this.setState(state => ({
  //       books: state.books.filter(b => b.id !==book.id.concat(book))
  //     }))
  //   })
  };


  render() {
    return (
      <BookShelf books={this.state.books} updateShelf={this.changeShelf}/>
    )
  }
}

export default BooksApp
