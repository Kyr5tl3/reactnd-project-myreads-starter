import React, {Component} from 'react'
import './App.css'

class Shelf extends Component {
  getInitialState(){
        return {selectValue:'currentlyReading'};
    },

  handleChange(e){
      this.setState({selectValue:e.target.value});
    },

  render(){
    return(
      <div className="book-shelf-changer">
        <select
          value={this.state.selectValue}
          onChange={this.handleChange}
        >
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
 )}
}

export default Shelf
