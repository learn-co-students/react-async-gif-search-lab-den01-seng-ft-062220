import React, { Component } from 'react';
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

export default class GifListContainer extends Component {

  constructor(){
    super();
    this.state = {
      gifs: []
    }
  }

  fetchGifs = (query='dolphins') => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(response => response.json())
      .then(({data}) => this.setState({
        gifs: data.slice(0, 3).map(gif => ({
          url: gif.images.original.url
        }))
      }))
  }
  componentDidMount(){
    this.fetchGifs()
  }

  render(){
    return (
      <div>
        <GifSearch fetchGifs={this.fetchGifs} />
        <GifList gifs={this.state} />
      </div>
    )
  }
}