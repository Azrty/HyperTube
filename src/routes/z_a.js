import React, { Component } from 'react'
import { tmdb } from '../utils/api.js'
import Grid from '../components/grid'
import store from '../utils/store.js'
import { observer } from 'mobx-react'

@observer

class z_a extends Component {
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
        page: store.pageResultz_a,
        sort_by: 'original_title.desc',
        language: 'fr'
      }
    }).then((res) => {
      if (this.state.page === res.data.total_pages) this.setState({hasMore: false})
      store.addResultz_a(res.data.results)
    }).catch((err) => {
      console.log(err.response)
    })
  }

  render () {
    return (
      <div>
        <Grid handleChangePage={this.handleChangePage} hasMore={this.state.hasMore} result={store.resultz_a} history={this.props.history} />
      </div>
    )
  }
}

export default z_a
