import React, { Component } from 'react'
import { tmdb } from '../utils/api.js'
import Grid from '../components/grid'
import store from '../utils/store.js'
import { observer } from 'mobx-react'

@observer

class Newest extends Component {
  constructor (props) {
    super(props)
    this.state = {
      page: 1,
      hasMore: true,
      nbPage: ''
    }
    this.handleChangePage = this.handleChangePage.bind(this)
  }

  handleChangePage () {
    tmdb().get('discover/movie', {
      params: {
        page: store.pageResultNewest,
        sort_by: 'revenue.desc',
        language: 'fr'
      }
    }).then((res) => {
      if (this.state.page === res.data.total_pages) this.setState({hasMore: false})
      store.addResultNewest(res.data.results)
    }).catch((err) => {
      console.log(err.response)
    })
  }

  render () {
    return (
      <div>
        <Grid handleChangePage={this.handleChangePage} hasMore={this.state.hasMore} result={store.resultNewest} history={this.props.history} />
      </div>
    )
  }
}

export default Newest
