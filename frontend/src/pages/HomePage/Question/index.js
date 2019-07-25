import React from 'react'
import { Radio, Card, List } from 'antd' 

class Question extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      question: this.props.question
    } 
  }
  onChange = e => { 
    this.setState({
      value: e.target.value,
    });
  };
  render () {
    return (
      <Card style={{
        margin: 40,
        padding: 40,
        boxShadow: '0 0 0 1px #e5e5e5'}}> 
        {this.state.question}
        <Radio.Group onChange={this.onChange} value={this.state.value}>
        <Radio value={1}></Radio>
        <Radio value={2}></Radio>
        <Radio value={3}></Radio>
        <Radio value={4}></Radio>
        <Radio value={5}></Radio>
        <Radio value={6}></Radio>
        <Radio value={7}></Radio>
      </Radio.Group>
      </Card>
    )
  }
}

export default Question
