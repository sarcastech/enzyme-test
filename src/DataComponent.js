import React, { Component } from 'react'
import axios from 'axios'

const API_URL = 'https://jsonplaceholder.typicode.com/users'

class DataComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: []
    }

    this.componentDidMount = this.componentDidMount.bind(this)
    this.generateList = this.generateList.bind(this)
  }

  componentDidMount () {
    axios.get(API_URL)
      .then((response) => {
        this.setState({
          data: response.data
        })
      })
  }

  generateList () {
    if (this.state.data.length < 1) {
      return false
    }
    let items = this.state.data.map((item, index) => {
      return (<li key={index}>{item.name}</li>)
    })

    return (
      <ul>
        {items}
      </ul>
    )
  }

  render () {
    return (
      <div>
        {this.generateList()}
      </div>
    )
  }
}

export default DataComponent
