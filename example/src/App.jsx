import React, { Component } from 'react'
import { Input, TextInputWithOptions, Select, ErrorMessage, Button } from 'react-mhmk-ui'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = { city: '' }
  }

  render () {
    return (
      <div style={{ maxWidth: '300px', margin: 'auto', padding: '10px' }}>
        <h1 style={{ textAlign: 'center' }}>React mhmk UI</h1>
        <Input type='text' label='Name' />
        <TextInputWithOptions
          label='City'
          value={this.state.city}
          options={{
            berlin: 'Berlin',
            hamburg: 'Hamburg',
            munic: 'Munich'
          }}
          onChange={e => this.setState({ city: e.target.value })}
        />
        <Select label='Gender'>
          <option>male</option>
          <option>female</option>
        </Select>
        <ErrorMessage>Some Error Message</ErrorMessage>
        <Button label='Pending Button' pending disabled />
        <Button label='Normal Button' />
      </div>
    )
  }
}
