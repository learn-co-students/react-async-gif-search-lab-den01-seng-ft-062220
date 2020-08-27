import React, { Component } from 'react';

export default class GifList extends Component {

  renderGifLis = () => {
    return this.props.gifs.gifs.map(gif => {
      return (
        <li><img src={gif.url}/></li>
      )
    })
  }
  render(){
    return(
      <ul>
        {this.renderGifLis()}
      </ul>
    )
  }
}