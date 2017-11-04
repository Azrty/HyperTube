import React, { Component } from 'react'
import Player from '../components/player.js'
import Comment from '../components/comment.js'

class Lecture extends Component {
  constructor (props) {
    super(props)
    this.state = {
      uuid: this.props.match.params.id
    }
  }
  
  componentWillMount () {
    console.log(this.props.match.params.id)
  }
  

  render () {
    return (
      <div>
        <Player history={this.props.history} uuid={this.props.match.params.id} />
        <Comment history={this.props.history} uuid={this.props.match.params.id} />
      </div>
    )
  }
}

export default Lecture