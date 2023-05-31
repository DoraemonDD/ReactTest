import React, { Component } from 'react'
import axios from 'axios'

export default class index extends Component {
  search = () => {
    const {
      searchEl: { value: keyWord }, // 连续解构赋值+重命名
    } = this
    axios.get(`http://localhost:3000/api1/search/users?q=${keyWord}`).then(
      (res) => {
        console.log('success', res.data)
      },
      (error) => {
        console.log('fail', error)
      },
    )
  }

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input
            ref={(c) => {
              this.searchEl = c
            }}
            type="text"
            placeholder="enter the name you search"
          />
          &nbsp;<button onClick={this.search}>Search</button>
        </div>
      </section>
    )
  }
}
