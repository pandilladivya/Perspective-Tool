import React from 'react'
import { Radio, Card, List } from 'antd'
import styled from 'styled-components'

const RadioComponent = styled(Radio)`
  margin: 10px;
`
const DisagreeText = styled.span`
    color: red;
    font-weight: 500;
    font-size: 14px;
    `

const AgreeText = styled.span`
    color: green;
    font-weight: 500;
    font-size: 14px;
    `
const InnerLayout = styled.div`
margin: 40px;
display: flex;
flex-direction: row;
justify-content: center;
`
class Question extends React.Component {
  constructor(props) {
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
  render() {
    return (
      <Card style={{
        marginLeft: 40,
        marginRight: 40,
        width: 600,
        padding: 40,
        boxShadow: '0 0 0 1px #e5e5e5',
        textAlign: 'center',
        fontWeight: 600
      }}>
        {this.state.question}
        <InnerLayout>
          <DisagreeText>Disagree</DisagreeText>
          <Radio.Group size="large" onChange={this.onChange} value={this.state.value}>
            <RadioComponent value={1}></RadioComponent>
            <RadioComponent value={2}></RadioComponent>
            <RadioComponent value={3}></RadioComponent>
            <RadioComponent value={4}></RadioComponent>
            <RadioComponent value={5}></RadioComponent>
            <RadioComponent value={6}></RadioComponent>
            <RadioComponent value={7}></RadioComponent>
          </Radio.Group>
          <AgreeText>Agree</AgreeText>
        </InnerLayout>

      </Card>
    )
  }
}

export default Question
