/* eslint-disable react/prefer-stateless-function,react/prop-types */
import React from 'react'
import { Select } from 'antd'

export default class MultipleInput extends React.Component {
  state = {
    values: [],
  }
  textTemp = ''
  handleChange = (values) => {
    this.textTemp = ''
    this.setState({ values })
    this.props.onChange(values)
  }
  handleSearch = (value) => {
    this.textTemp = value
  }
  handleBlur= () => {
    if (this.textTemp) {
      const values = this.state.values
      values.push(this.textTemp)
      this.textTemp = ''
      this.setState({ values })
      this.props.onChange(values)
    }
  }
  render() {
    return (
      <Select
        mode="tags"
        value={this.state.values}
        tokenSeparators={[',', '，']}
        placeholder={this.props.placeholder}
        dropdownStyle={{ display: 'none' }}
        onChange={value => this.handleChange(value)}
        onSearch={value => this.handleSearch(value)}
        onBlur={() => this.handleBlur()}
      />
    )
  }
}