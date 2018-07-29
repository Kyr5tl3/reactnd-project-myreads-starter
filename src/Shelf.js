import React, {Component} from 'react'
import './App.css'

class Shelf extends Component{
  render(){
    return(
      <div className="book-shelf-changer">
        <select onChange={this.props.onSelectShelf}/>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
 )};
}

export default Shelf
